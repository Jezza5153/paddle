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
    // 1. Fetch order by ID
    // 2. Verify payment status is 'paid'
    // 3. Build CJ order payload from OrderItems
    // 4. Save payload to SupplierOrder.requestPayload
    // 5. Send to CJ via createCJOrder()
    // 6. Save response to SupplierOrder.responsePayload
    // 7. Update SupplierOrder.status and supplierOrderRef

    return NextResponse.json({
      message: `Order ${id} zou naar CJ worden gestuurd`,
      note: "Verbind eerst de database om orders naar CJ te sturen",
    });
  } catch (error) {
    console.error("Send to CJ error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Versturen mislukt" },
      { status: 500 }
    );
  }
}
