import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newProductsPath = path.join(__dirname, 'new_products.txt');
const productsTsPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');

const newProductsText = fs.readFileSync(newProductsPath, 'utf8');
let productsTs = fs.readFileSync(productsTsPath, 'utf8');

// The array ends with "];\n\nexport function getProductBySlug"
productsTs = productsTs.replace('];\n\nexport function getProductBySlug', newProductsText + "\n];\n\nexport function getProductBySlug");

fs.writeFileSync(productsTsPath, productsTs);
console.log('Appended successfully.');
