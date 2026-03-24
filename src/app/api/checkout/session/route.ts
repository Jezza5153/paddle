import { NextResponse } from "next/server";
import Stripe from "stripe";
import https from "https";
import { z } from "zod";
import { getProductBySlug } from "@/data/products";

const agent = new https.Agent({ keepAlive: false });

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2025-02-24.acacia" as Stripe.LatestApiVersion,
    httpAgent: agent,
    timeout: 15000,
  });
}

const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        slug: z.string(),
        quantity: z.number().int().min(1).max(10),
      })
    )
    .min(1)
    .max(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = checkoutSchema.parse(body);

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => {
        const product = getProductBySlug(item.slug);
        if (!product) {
          throw new Error(`Product niet gevonden: ${item.slug}`);
        }

        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: product.name,
              description: product.shortDescription,
              images: [
                `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}${product.primaryImage}`,
              ],
            },
            unit_amount: Math.round(product.basePriceIncVat * 100),
          },
          quantity: item.quantity,
        };
      }
    );

    const cartMeta = items.map((i) => `${i.slug}:${i.quantity}`).join(",");

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card", "ideal"],
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["NL", "BE", "DE", "FR", "AT", "LU"],
      },
      customer_email: undefined,
      metadata: {
        cart: cartMeta,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ongeldige aanvraag", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Checkout session error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Er ging iets mis" },
      { status: 500 }
    );
  }
}
