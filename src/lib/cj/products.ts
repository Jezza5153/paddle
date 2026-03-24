import { cjFetch } from "./client";
import type {
  CJProduct,
  CJInventory,
  CJProductSearchParams,
  CJProductListResponse,
} from "./types";

/**
 * Search for products in CJ catalog
 */
export async function searchProducts(
  params: CJProductSearchParams
): Promise<CJProductListResponse> {
  const response = await cjFetch<CJProductListResponse>(
    "/product/list",
    {
      method: "GET",
      params: {
        ...(params.productNameEn && { productNameEn: params.productNameEn }),
        ...(params.categoryId && { categoryId: params.categoryId }),
        pageNum: String(params.pageNum || 1),
        pageSize: String(params.pageSize || 20),
      },
    }
  );
  return response.data;
}

/**
 * Get product details by CJ product ID
 */
export async function getProductById(pid: string): Promise<CJProduct> {
  const response = await cjFetch<CJProduct>(`/product/query`, {
    method: "GET",
    params: { pid },
  });
  return response.data;
}

/**
 * Get inventory/stock info for a variant
 */
export async function getVariantInventory(
  vid: string
): Promise<CJInventory[]> {
  const response = await cjFetch<CJInventory[]>(
    `/product/stock`,
    {
      method: "GET",
      params: { vid },
    }
  );
  return response.data;
}

/**
 * Check EU warehouse stock availability
 * Returns the EU warehouse entry if available, null otherwise
 */
export function findEUWarehouseStock(
  inventory: CJInventory[]
): CJInventory | null {
  const euWarehouseCodes = ["CJ_DE", "CJ_NL", "CJ_PL", "CJ_CZ", "DE", "NL"];
  return (
    inventory.find((inv) =>
      euWarehouseCodes.some(
        (code) =>
          inv.warehouseCode.toUpperCase().includes(code) && inv.quantity > 0
      )
    ) || null
  );
}
