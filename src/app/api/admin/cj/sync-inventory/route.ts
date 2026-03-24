import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { verifyAdminAuth, unauthorizedResponse } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const headersList = await headers();
  if (!verifyAdminAuth(headersList)) return unauthorizedResponse();

  try {
    // TODO: When DB is connected:
    // 1. Fetch all active variants with cjVariantId
    // 2. For each variant, call CJ inventory API
    // 3. Update stockStatus and stockQty
    // 4. Log to InventorySyncLog

    return NextResponse.json({
      message: "Inventory sync zou hier draaien",
      note: "Verbind eerst de database om inventory sync te activeren",
    });
  } catch (error) {
    console.error("Sync error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Sync mislukt" },
      { status: 500 }
    );
  }
}
