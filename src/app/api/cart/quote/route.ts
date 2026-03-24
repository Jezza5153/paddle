import { NextResponse } from "next/server";
import { z } from "zod";
import { getProductBySlug } from "@/data/products";

const cartItemSchema = z.object({
  slug: z.string(),
  quantity: z.number().int().min(1).max(10),
});

const quoteSchema = z.object({
  items: z.array(cartItemSchema).min(1).max(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = quoteSchema.parse(body);

    const lineItems = items.map((item) => {
      const product = getProductBySlug(item.slug);
      if (!product) {
        throw new Error(`Product niet gevonden: ${item.slug}`);
      }
      return {
        slug: product.slug,
        name: product.name,
        unitPriceIncVat: product.basePriceIncVat,
        quantity: item.quantity,
        totalPriceIncVat: product.basePriceIncVat * item.quantity,
      };
    });

    const subtotalIncVat = lineItems.reduce(
      (sum, item) => sum + item.totalPriceIncVat,
      0
    );

    return NextResponse.json({
      lineItems,
      subtotalIncVat,
      currency: "EUR",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ongeldige aanvraag", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Er ging iets mis" },
      { status: 400 }
    );
  }
}
