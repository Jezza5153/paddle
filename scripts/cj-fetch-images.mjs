#!/usr/bin/env node

/**
 * Fetch real product images from CJ Dropshipping API
 * and save them to public/images/products/
 * 
 * Usage: node scripts/cj-fetch-images.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const IMAGES_DIR = join(PROJECT_ROOT, "public", "images", "products");
const CJ_API_BASE = "https://developers.cjdropshipping.com/api2.0/v1";

function loadToken() {
  try {
    const envPath = join(PROJECT_ROOT, ".env.local");
    const envContent = readFileSync(envPath, "utf-8");
    const match = envContent.match(/CJ_ACCESS_TOKEN="([^"]+)"/);
    if (match) return match[1];
  } catch {}
  console.error("❌ Could not read CJ_ACCESS_TOKEN from .env.local");
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
    return null;
  }
  return data.data;
}

async function downloadImage(url, filepath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  ⚠️  Failed to download: ${url} (${res.status})`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(filepath, buffer);
    console.log(`  ✅ Saved: ${filepath.split("/products/")[1]} (${Math.round(buffer.length / 1024)}KB)`);
    return true;
  } catch (err) {
    console.error(`  ⚠️  Download error: ${err.message}`);
    return false;
  }
}

// Products to fetch images for
const PRODUCTS = [
  {
    cjProductId: "2603200143061633900",
    slug: "carbon-paddle-set",
    files: ["carbon-paddle-set.jpg", "carbon-paddle-set-2.jpg", "carbon-paddle-set-3.jpg"],
  },
  {
    cjProductId: "2603200143061633900",
    slug: "starter-paddle",
    files: ["starter-paddle.jpg", "starter-paddle-2.jpg"],
  },
  {
    cjProductId: "2003787550997196801",
    slug: "draagbaar-net",
    files: ["draagbaar-net.jpg", "draagbaar-net-2.jpg", "draagbaar-net-3.jpg"],
  },
  {
    cjProductId: "2601190927111633600",
    slug: "edge-guards",
    files: ["edge-guards.jpg", "edge-guards-2.jpg"],
  },
  {
    cjProductId: "2601220727341610700",
    slug: "pro-paddle",
    files: ["pro-paddle.jpg", "pro-paddle-2.jpg"],
  },
];

async function main() {
  mkdirSync(IMAGES_DIR, { recursive: true });

  console.log("🖼️  Fetching real product images from CJ Dropshipping...\n");

  // Deduplicate CJ product IDs (carbon-paddle-set and starter-paddle share the same product)
  const uniqueIds = [...new Set(PRODUCTS.map(p => p.cjProductId))];
  const productCache = {};

  for (const pid of uniqueIds) {
    console.log(`📦 Fetching product ${pid}...`);
    const product = await cjFetch("/product/query", { pid });
    if (product) {
      productCache[pid] = product;
      console.log(`   Name: ${product.productNameEn}`);
      
      // Collect all image URLs — CJ API can return URLs as:
      // - plain string URL
      // - JSON-stringified array of URLs  
      // - actual array of URLs
      const images = [];
      
      function extractUrls(val) {
        if (!val) return;
        if (typeof val === 'string') {
          // Could be a single URL or a JSON array string
          if (val.startsWith('[')) {
            try {
              const parsed = JSON.parse(val);
              if (Array.isArray(parsed)) {
                parsed.forEach(u => { if (typeof u === 'string' && u.startsWith('http') && !images.includes(u)) images.push(u); });
              }
            } catch { /* not JSON, treat as URL */ }
          } else if (val.startsWith('http') && !images.includes(val)) {
            images.push(val);
          }
        } else if (Array.isArray(val)) {
          val.forEach(v => extractUrls(v));
        }
      }
      
      extractUrls(product.productImage);
      extractUrls(product.productImageSet);
      
      // Also check variant images
      if (product.variants) {
        for (const v of product.variants) {
          extractUrls(v.variantImage);
        }
      }
      productCache[pid]._allImages = images;
      console.log(`   Found ${images.length} images\n`);
    }
    // CJ enforces 1 req/sec rate limit
    await new Promise(r => setTimeout(r, 1500));
  }

  // Now download images for each product
  console.log("\n📥 Downloading images...\n");

  for (const product of PRODUCTS) {
    const cached = productCache[product.cjProductId];
    if (!cached) {
      console.log(`⚠️  Skipping ${product.slug} — no CJ data`);
      continue;
    }

    console.log(`\n🏷️  ${product.slug}:`);
    const images = cached._allImages || [];

    for (let i = 0; i < product.files.length; i++) {
      const imageUrl = images[i] || images[0]; // Fall back to primary image
      if (!imageUrl) {
        console.log(`  ⚠️  No image available for ${product.files[i]}`);
        continue;
      }
      const filepath = join(IMAGES_DIR, product.files[i]);
      await downloadImage(imageUrl, filepath);
      await new Promise(r => setTimeout(r, 200));
    }
  }

  console.log("\n✅ Done! All images downloaded.\n");
  
  // Print summary of image URLs for reference
  console.log("📋 Image URL reference:");
  for (const [pid, product] of Object.entries(productCache)) {
    console.log(`\n  ${product.productNameEn}:`);
    (product._allImages || []).forEach((url, i) => {
      console.log(`    [${i}] ${url}`);
    });
  }
}

main().catch(console.error);
