import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { verifyAdminAuth, unauthorizedResponse } from "@/lib/admin-auth";

export async function GET(request: Request) {
  const headersList = await headers();
  if (!verifyAdminAuth(headersList)) return unauthorizedResponse();

  // TODO: When DB is connected, fetch orders from DB
  return NextResponse.json({
    orders: [],
    message: "Verbind de database om orders te bekijken",
  });
}
