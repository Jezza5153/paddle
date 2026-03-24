import { NextResponse } from "next/server";
import { getAllProducts } from "@/data/products";

export async function GET() {
  const products = getAllProducts();
  return NextResponse.json({ products });
}
