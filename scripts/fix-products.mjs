import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', 'src', 'data', 'products.ts');

let content = fs.readFileSync(filePath, 'utf8');

// Replace cjDropshipping object blocks with flat fields
content = content.replace(
  /cjDropshipping: \{\s*productId: "([^"]+)",\s*variantId: "([^"]*)",\s*supplierMatch: true,\s*lastSync: new Date\(\)\.toISOString\(\)\s*\}/g,
  'cjProductId: "$1",\n    cjVariantId: "$2",\n    cjSku: "$2",\n    cjCostUsd: 0'
);

// Remove shippingCost field from new products
content = content.replace(/,\s*shippingCost: 0\s*\n\s*\}/g, '\n  }');

// For every product block that doesn't have a `status:` field, add it after `basePriceIncVat`
// We need a more surgical approach - find blocks missing status, brand, contents

// Split into lines for processing
const lines = content.split('\n');
const output = [];
let inNewProduct = false;
let hasStatus = false;
let hasBrand = false;
let hasContents = false;
let productStartLine = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect start of a product object
  if (line.trim() === '{' && i > 0 && (lines[i-1]?.trim().endsWith(',') || lines[i-1]?.trim() === '')) {
    inNewProduct = true;
    hasStatus = false;
    hasBrand = false;
    hasContents = false;
    productStartLine = i;
  }
  
  if (inNewProduct) {
    if (line.includes('status:')) hasStatus = true;
    if (line.includes('brand:')) hasBrand = true;
    if (line.includes('contents:')) hasContents = true;
  }
  
  // Detect end of product object - inject missing fields
  if (inNewProduct && line.trim() === '},') {
    // If missing fields, we need to insert them before this closing brace
    // Find the line with category to insert after
    if (!hasStatus || !hasBrand || !hasContents) {
      // Walk backwards to find a good insertion point (before bulletPoints)
      let insertIdx = output.length - 1;
      for (let j = output.length - 1; j >= productStartLine; j--) {
        if (output[j].includes('bulletPoints:')) {
          insertIdx = j;
          break;
        }
      }
      
      const inserts = [];
      if (!hasStatus) inserts.push('    status: "active",');
      if (!hasBrand) inserts.push('    brand: "CourtStart",');
      if (!hasContents) inserts.push('    contents: [],');
      
      // Insert before bulletPoints
      output.splice(insertIdx, 0, ...inserts);
    }
    inNewProduct = false;
  }
  
  output.push(line);
}

fs.writeFileSync(filePath, output.join('\n'));
console.log('Fixed products.ts - added missing fields and flattened cjDropshipping objects');
