#!/usr/bin/env node

/**
 * CJ Product Search & Browse Script
 * 
 * Usage:
 *   node scripts/cj-browse.mjs "pickleball"
 *   node scripts/cj-browse.mjs "pickleball court" --page 2
 *   node scripts/cj-browse.mjs --id PRODUCT_ID
 * 
 * Searches CJ catalog and shows products with pricing + EU warehouse stock.
 */

const CJ_API_BASE = "https://developers.cjdropshipping.com/api2.0/v1";

// Read token from .env.local
import { readFileSync } from "fs";
import { join } from "path";

function loadToken() {
  try {
    const envPath = join(process.cwd(), ".env.local");
    const envContent = readFileSync(envPath, "utf-8");
    const match = envContent.match(/CJ_ACCESS_TOKEN="([^"]+)"/);
    if (match) return match[1];
  } catch {}
  console.error("❌ Could not read CJ_ACCESS_TOKEN from .env.local");
  console.error("   Run: node scripts/cj-get-token.mjs");
  process.exit(1);
}

const TOKEN = loadToken();

async function cjFetch(endpoint, params = {}) {
  const url = new URL(`${CJ_API_BASE}${endpoint}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    headers: { "CJ-Access-Token": TOKEN },
  });
  const data = await res.json();

  if (!data.result) {
    console.error(`❌ CJ API Error: ${data.message}`);
    if (data.message?.includes("Invalid API")) {
      console.error("   Your token is expired. Run: node scripts/cj-get-token.mjs");
    }
    process.exit(1);
  }
  return data.data;
}

async function searchProducts(query, page = 1) {
  console.log(`\n🔍 Searching CJ for: "${query}" (page ${page})\n`);

  const data = await cjFetch("/product/list", {
    productNameEn: query,
    pageNum: String(page),
    pageSize: "10",
  });

  if (!data.list || data.list.length === 0) {
    console.log("No products found. Try a different search term.");
    return;
  }

  console.log(`Found ${data.total} products (showing ${data.list.length}):\n`);
  console.log("─".repeat(80));

  for (const product of data.list) {
    const variantCount = product.variants?.length || 0;
    console.log(`📦 ${product.productNameEn}`);
    console.log(`   ID:         ${product.pid}`);
    console.log(`   Price:      $${product.sellPrice}`);
    console.log(`   Category:   ${product.categoryName || "N/A"}`);
    console.log(`   Variants:   ${variantCount}`);
    console.log(`   Image:      ${product.productImage}`);
    console.log("─".repeat(80));
  }

  console.log(`\n📄 Page ${page} of ${Math.ceil(data.total / 10)}`);
  console.log(`   Next page: node scripts/cj-browse.mjs "${query}" --page ${page + 1}\n`);
}

async function getProductDetail(pid) {
  console.log(`\n📦 Fetching product details: ${pid}\n`);

  const product = await cjFetch("/product/query", { pid });

  console.log("─".repeat(80));
  console.log(`Name:        ${product.productNameEn}`);
  console.log(`ID:          ${product.pid}`);
  console.log(`Price:       $${product.sellPrice}`);
  console.log(`Weight:      ${product.productWeight}g`);
  console.log(`Category:    ${product.categoryName}`);
  console.log(`Image:       ${product.productImage}`);
  console.log("─".repeat(80));

  if (product.variants?.length) {
    console.log(`\nVariants (${product.variants.length}):\n`);
    for (const v of product.variants) {
      console.log(`  • ${v.variantName}`);
      console.log(`    VID: ${v.vid} | SKU: ${v.variantSku} | $${v.variantPrice}`);
    }
  }

  console.log(`\nDescription:\n${product.description?.slice(0, 500)}...\n`);
}

// --- Main ---
const args = process.argv.slice(2);

if (args.includes("--id")) {
  const idIndex = args.indexOf("--id") + 1;
  if (args[idIndex]) {
    getProductDetail(args[idIndex]);
  } else {
    console.log("Usage: node scripts/cj-browse.mjs --id PRODUCT_ID");
  }
} else {
  const query = args.filter(a => !a.startsWith("--"))[0] || "pickleball";
  const pageIndex = args.indexOf("--page");
  const page = pageIndex >= 0 ? parseInt(args[pageIndex + 1]) || 1 : 1;
  searchProducts(query, page);
}
