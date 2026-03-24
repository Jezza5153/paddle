import { NextResponse } from "next/server";
import { headers } from "next/headers";

export function verifyAdminAuth(headersList: Headers): boolean {
  const apiKey = headersList.get("x-admin-api-key");
  return apiKey === process.env.ADMIN_API_KEY;
}

export function unauthorizedResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
