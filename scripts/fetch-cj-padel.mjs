import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure directory exists
const publicDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Credentials from .env.local
const CJ_ACCESS_TOKEN = process.env.CJ_ACCESS_TOKEN || "API@CJ5264547@CJ:eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNDEyOSIsInR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJzdWIiOiJicUxvYnFRMGxtTm55UXB4UFdMWnlwOGdFejhPTGtaK3JJR2drbCt1MHVjc3dzbVg2SlI0ZFBITTRqeXFpWFNzRFZxY0U3WllMRFBvOTZMSTVnT1RmNU9OZjhDZEYyV0VtZ1ZvS2dtdVo2TElXTFRwSFRDclUxaHFPYVcyVUludVpDNURQOXp5WXRJYnk2Q3hNUUNTM0pMME85YVhsRWxaa0pLYnFyVUgrNUZWS3Ivb05BakVsTzI4YlB3UjMwNVhCVnNhVy9RK3c1bzJBbTJOWDdOa0lYMGFKZ1haMFRTNW00WGd5dTI4S3hDQjVxelZXSVF5WjV0VncrMTZMZzI5V1VqZ3Nlc3AzVC95OENSNk1TZHRER0hZcDNyRm4wSEFNaytLaGM5OHJ1M1JhQ25wd1RZMEN2NDFadWRvMzBYZiIsImlhdCI6MTc3NDM2MDk0Nn0.b7zY6Gt6G51Hz3kkqMgcyviqp6cOn2S-4xXheKLQ8JA";

async function cjFetch(endpoint, method = 'GET', data = null) {
  const url = `https://developers.cjdropshipping.com/api2.0/v1${endpoint}`;
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'CJ-Access-Token': CJ_ACCESS_TOKEN,
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch(e) {
    console.error("Failed to parse JSON:", text);
    throw e;
  }
}

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download image: ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(filename);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

function generateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function run() {
  console.log("Searching for Padel products on CJ...");
  const searchRes = await cjFetch('/product/list?productNameEn=tennis&pageNum=1&pageSize=20', 'GET');
  
  if (!searchRes.result || searchRes.result === false) {
    console.error("CJ API Error:", searchRes);
    return;
  }
  
  const items = searchRes.data.list || [];
  console.log(`Found ${items.length} items. Processing...`);
  
  let productsCode = '';
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const pid = item.pid;
    const name = item.productNameEn || `Padel Product ${i}`;
    let sellPrice = parseFloat(item.sellPrice || "20");
    if (isNaN(sellPrice)) sellPrice = 20;
    
    // 25% margin
    const priceWithMargin = parseFloat((sellPrice * 1.25).toFixed(2));
    
    const slug = generateSlug(name) + '-' + pid.substring(0, 4);
    const imageUrl = item.productImage;
    const imageFilename = `${slug}.jpg`;
    const imagePath = path.join(publicDir, imageFilename);
    const publicImageUrl = `/images/products/${imageFilename}`;
    
    console.log(`Saving ${name} (Price: ${priceWithMargin})`);
    
    try {
      await downloadImage(imageUrl, imagePath);
    } catch(e) {
      console.log(`Skipping image download for ${pid}: ${e.message}`);
    }
    
    const productStr = `
  {
    id: "${pid}",
    name: ${JSON.stringify(name)},
    slug: "${slug}",
    shortDescription: ${JSON.stringify(name)},
    description: ${JSON.stringify(name + " - High performance padel gear.")},
    basePriceIncVat: ${priceWithMargin},
    compareAtPriceIncVat: ${parseFloat((priceWithMargin * 1.5).toFixed(2))},
    category: "Padel",
    badge: "NEW",
    primaryImage: "${publicImageUrl}",
    galleryImages: ["${publicImageUrl}"],
    bulletPoints: [
      "Ergonomic handle for maximum grip",
      "Carbon fiber reinforced structure",
      "Lightweight for fast reactions"
    ],
    faq: [
      {
        question: "Is dit geschikt voor beginners?",
        answer: "Ja, dit is ideaal voor spelers van elk niveau."
      }
    ],
    cjDropshipping: {
      productId: "${pid}",
      variantId: "${item.productSku || ''}",
      supplierMatch: true,
      lastSync: new Date().toISOString()
    },
    shippingEstimateMinDays: 6,
    shippingEstimateMaxDays: 12,
    returnWindowDays: 14,
    shippingCost: 0
  },`;
    productsCode += productStr;
  }
  
  console.log("\\n\\n--- ADD THIS TO products.ts ---");
  console.log(productsCode);
  
  const outputPath = path.join(__dirname, 'new_products.txt');
  fs.writeFileSync(outputPath, productsCode);
  console.log(`Saved code to ${outputPath}`);
}

run().catch(console.error);
