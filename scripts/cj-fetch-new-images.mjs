#!/usr/bin/env node
/**
 * Quick script to fetch images for the 3 new products only
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const IMAGES_DIR = join(PROJECT_ROOT, "public", "images", "products");
const CJ_API_BASE = "https://developers.cjdropshipping.com/api2.0/v1";

function loadToken() {
  const envPath = join(PROJECT_ROOT, ".env.local");
  const envContent = readFileSync(envPath, "utf-8");
  const match = envContent.match(/CJ_ACCESS_TOKEN="([^"]+)"/);
  return match[1];
}

const TOKEN = loadToken();

async function cjFetch(endpoint, params = {}) {
  const url = new URL(`${CJ_API_BASE}${endpoint}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), { headers: { "CJ-Access-Token": TOKEN } });
  const data = await res.json();
  if (!data.result) { console.error(`❌ ${data.message}`); return null; }
  return data.data;
}

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) { console.error(`  ⚠️ ${res.status} for ${url}`); return; }
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(filepath, buffer);
  console.log(`  ✅ ${filepath.split("/products/")[1]} (${Math.round(buffer.length/1024)}KB)`);
}

function extractUrls(val, images) {
  if (!val) return;
  if (typeof val === 'string') {
    if (val.startsWith('[')) {
      try { JSON.parse(val).forEach(u => { if (typeof u==='string'&&u.startsWith('http')&&!images.includes(u)) images.push(u); }); } catch {}
    } else if (val.startsWith('http') && !images.includes(val)) images.push(val);
  } else if (Array.isArray(val)) val.forEach(v => extractUrls(v, images));
}

const PRODUCTS = [
  { pid: "2603200158411635100", files: ["outdoor-ballen.jpg", "outdoor-ballen-2.jpg"] },
  { pid: "2601190932291637900", files: ["pickleball-tshirt.jpg", "pickleball-tshirt-2.jpg"] },
  { pid: "2003770664737681410", files: ["pickleball-cap.jpg", "pickleball-cap-2.jpg"] },
];

async function main() {
  mkdirSync(IMAGES_DIR, { recursive: true });
  
  for (const p of PRODUCTS) {
    console.log(`\n📦 Fetching ${p.pid}...`);
    const product = await cjFetch("/product/query", { pid: p.pid });
    if (!product) continue;
    console.log(`   ${product.productNameEn}`);
    
    const images = [];
    extractUrls(product.productImage, images);
    extractUrls(product.productImageSet, images);
    if (product.variants) product.variants.forEach(v => extractUrls(v.variantImage, images));
    
    console.log(`   Found ${images.length} images`);
    
    for (let i = 0; i < p.files.length; i++) {
      const url = images[i] || images[0];
      if (url) await downloadImage(url, join(IMAGES_DIR, p.files[i]));
      await new Promise(r => setTimeout(r, 200));
    }
    
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log("\n✅ Done!");
}

main().catch(console.error);
