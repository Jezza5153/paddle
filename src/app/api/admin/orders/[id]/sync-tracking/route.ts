import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { verifyAdminAuth, unauthorizedResponse } from "@/lib/admin-auth";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const headersList = await headers();
  if (!verifyAdminAuth(headersList)) return unauthorizedResponse();

  const { id } = await params;

  try {
    // TODO: When DB is connected:
    // 1. Fetch SupplierOrder for this order
    // 2. Get tracking from CJ via getOrderTracking()
    // 3. Update Order.trackingCode and Order.trackingUrl
    // 4. Optionally send tracking email to customer

    return NextResponse.json({
      message: `Tracking sync voor order ${id}`,
      note: "Verbind eerst de database om tracking te synchroniseren",
    });
  } catch (error) {
    console.error("Sync tracking error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Sync mislukt" },
      { status: 500 }
    );
  }
}
