import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { verifyAdminAuth, unauthorizedResponse } from "@/lib/admin-auth";
import { z } from "zod";
import { getProductById, getVariantInventory, findEUWarehouseStock } from "@/lib/cj/products";

const importSchema = z.object({
  cjProductId: z.string(),
  name: z.string(),
  slug: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  basePriceIncVat: z.number(),
  category: z.string(),
  brand: z.string().default("CourtStart"),
});

export async function POST(request: Request) {
  const headersList = await headers();
  if (!verifyAdminAuth(headersList)) return unauthorizedResponse();

  try {
    const body = await request.json();
    const data = importSchema.parse(body);

    // Fetch product from CJ
    const cjProduct = await getProductById(data.cjProductId);

    // Check inventory for EU warehouse stock
    const variants = cjProduct.variants || [];
    const variantData = [];

    for (const variant of variants) {
      const inventory = await getVariantInventory(variant.vid);
      const euStock = findEUWarehouseStock(inventory);

      variantData.push({
        cjVariantId: variant.vid,
        cjProductId: data.cjProductId,
        title: variant.variantName,
        sku: variant.variantSku,
        supplierPrice: variant.variantPrice,
        euWarehouse: euStock
          ? {
              warehouseCode: euStock.warehouseCode,
              quantity: euStock.quantity,
            }
          : null,
        totalInventory: inventory,
      });
    }

    // TODO: When DB is connected, save to Product + ProductVariant tables

    return NextResponse.json({
      message: "Product import preview",
      cjProduct: {
        name: cjProduct.productName,
        image: cjProduct.productImage,
        variantCount: variants.length,
      },
      ourProduct: {
        name: data.name,
        slug: data.slug,
        price: data.basePriceIncVat,
      },
      variants: variantData,
      hasEUStock: variantData.some((v) => v.euWarehouse !== null),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ongeldige aanvraag", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Import error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Import mislukt" },
      { status: 500 }
    );
  }
}
