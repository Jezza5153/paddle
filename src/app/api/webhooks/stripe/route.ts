import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { prisma } from "@/lib/db";
import { getProductBySlug } from "@/data/products";
import { createCJOrder } from "@/lib/cj/orders";
import { sendOrderConfirmation } from "@/lib/email";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2025-02-24.acacia" as Stripe.LatestApiVersion,
    httpClient: Stripe.createNodeHttpClient(),
  });
}

export async function POST(request: Request) {
  const body = await request.text();
  const headersList = await headers();
  const sig = headersList.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

  let event: Stripe.Event;

  // If no webhook secret yet (dev mode), parse without verification
  if (!webhookSecret) {
    try {
      event = JSON.parse(body) as Stripe.Event;
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
  } else {
    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutComplete(session, stripe);
        break;
      }
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error(
          `Payment failed for PI ${paymentIntent.id}:`,
          paymentIntent.last_payment_error?.message
        );
        break;
      }
      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        console.log(`Charge refunded: ${charge.id}`);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error(`Error processing webhook event ${event.type}:`, error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutComplete(
  session: Stripe.Checkout.Session,
  stripe: Stripe
) {
  const sessionId = session.id;
  const cart = session.metadata?.cart;
  const email = session.customer_details?.email || "";

  // Idempotency check — don't process same session twice
  const existingOrder = await prisma.order.findUnique({
    where: { stripeCheckoutSessionId: sessionId },
  });
  if (existingOrder) {
    console.log(`Order already exists for session ${sessionId}, skipping`);
    return;
  }

  // Retrieve full session to get shipping details
  const fullSession = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["shipping_details"],
  });

  const shipping = (fullSession as any).shipping_details;

  // Parse cart: "slug:qty,slug:qty"
  const cartItems = (cart || "")
    .split(",")
    .map((entry) => {
      const [slug, qty] = entry.split(":");
      return { slug, quantity: parseInt(qty, 10) };
    })
    .filter((item) => item.slug && !isNaN(item.quantity));

  // Generate order number
  const orderNumber = `CS-${Date.now().toString(36).toUpperCase()}`;

  // Calculate totals
  let subtotal = 0;
  const orderItemsData = cartItems.map((item) => {
    const product = getProductBySlug(item.slug);
    if (!product) throw new Error(`Product not found: ${item.slug}`);
    const lineTotal = product.basePriceIncVat * item.quantity;
    subtotal += lineTotal;
    return {
      productSlug: item.slug,
      product,
      quantity: item.quantity,
      unitPrice: product.basePriceIncVat,
      lineTotal,
    };
  });

  // 1. Save order to database
  const order = await prisma.order.create({
    data: {
      orderNumber,
      email,
      firstName: shipping?.name?.split(" ")[0] || "Klant",
      lastName: shipping?.name?.split(" ").slice(1).join(" ") || "",
      currency: "EUR",
      subtotalIncVat: subtotal,
      shippingIncVat: 0,
      totalIncVat: (fullSession.amount_total || subtotal * 100) / 100,
      stripeCheckoutSessionId: sessionId,
      stripePaymentIntentId:
        typeof fullSession.payment_intent === "string"
          ? fullSession.payment_intent
          : fullSession.payment_intent?.id || null,
      paymentStatus: "paid",
      fulfillmentStatus: "unfulfilled",
      supplierStatus: "queued",
      shippingName: shipping?.name || "",
      shippingLine1: shipping?.address?.line1 || "",
      shippingLine2: shipping?.address?.line2 || null,
      shippingPostalCode: shipping?.address?.postal_code || "",
      shippingCity: shipping?.address?.city || "",
      shippingCountry: shipping?.address?.country || "NL",
      items: {
        create: orderItemsData.map((item) => ({
          productId: item.product.id,
          title: item.product.name,
          sku: item.product.cjSku || item.product.slug,
          quantity: item.quantity,
          unitPriceIncVat: item.unitPrice,
          totalPriceIncVat: item.lineTotal,
          cjVariantId: item.product.cjVariantId || null,
        })),
      },
    },
  });

  console.log(`✅ Order ${orderNumber} saved to database (id: ${order.id})`);

  // 2. Place CJ dropshipping order
  try {
    const cjProducts = orderItemsData
      .filter((item) => item.product.cjVariantId)
      .map((item) => ({
        vid: item.product.cjVariantId!,
        quantity: item.quantity,
      }));

    if (cjProducts.length > 0) {
      const cjResult = await createCJOrder({
        orderNumber,
        shippingZip: shipping?.address?.postal_code || "",
        shippingCountry: shipping?.name || "Netherlands",
        shippingCountryCode: shipping?.address?.country || "NL",
        shippingProvince: shipping?.address?.state || "",
        shippingCity: shipping?.address?.city || "",
        shippingAddress: shipping?.address?.line1 || "",
        shippingCustomerName: shipping?.name || "",
        shippingPhone: "",
        remark: `PaddleForge order ${orderNumber}`,
        products: cjProducts,
      });

      // Save supplier order record
      await prisma.supplierOrder.create({
        data: {
          orderId: order.id,
          supplierName: "cjdropshipping",
          supplierOrderRef: cjResult.orderId || cjResult.cjOrderId,
          requestPayload: { orderNumber, products: cjProducts },
          responsePayload: cjResult as any,
          status: "sent",
        },
      });

      // Update order supplier status
      await prisma.order.update({
        where: { id: order.id },
        data: { supplierStatus: "sent" },
      });

      console.log(
        `✅ CJ order placed: ${cjResult.orderId || cjResult.cjOrderId}`
      );
    }
  } catch (cjError) {
    console.error("❌ Failed to place CJ order:", cjError);
    // Save failed attempt
    await prisma.supplierOrder.create({
      data: {
        orderId: order.id,
        supplierName: "cjdropshipping",
        requestPayload: { orderNumber },
        status: "rejected",
        errorMessage:
          cjError instanceof Error ? cjError.message : "Unknown error",
      },
    });
  }

  // 3. Send confirmation email
  try {
    await sendOrderConfirmation({
      email,
      orderNumber,
      firstName: shipping?.name?.split(" ")[0] || "Klant",
      items: orderItemsData.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: `€${item.unitPrice.toFixed(2)}`,
      })),
      total: `€${((fullSession.amount_total || subtotal * 100) / 100).toFixed(2)}`,
    });
    console.log(`✅ Confirmation email sent to ${email}`);
  } catch (emailError) {
    console.error("❌ Failed to send confirmation email:", emailError);
  }
}
