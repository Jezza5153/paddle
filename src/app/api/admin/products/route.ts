import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { verifyAdminAuth, unauthorizedResponse } from "@/lib/admin-auth";
import { getAllProducts } from "@/data/products";

export async function GET(request: Request) {
  const headersList = await headers();
  if (!verifyAdminAuth(headersList)) return unauthorizedResponse();

  const products = getAllProducts();
  return NextResponse.json({ products });
}
