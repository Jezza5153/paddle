import { cjFetch } from "./client";
import type { CJOrderPayload, CJOrderResponse, CJTrackingInfo } from "./types";

/**
 * Create an order in CJ Dropshipping
 */
export async function createCJOrder(
  payload: CJOrderPayload
): Promise<CJOrderResponse> {
  const response = await cjFetch<CJOrderResponse>("/shopping/order/createOrder", {
    method: "POST",
    body: payload as unknown as Record<string, unknown>,
  });
  return response.data;
}

/**
 * Get tracking info for a CJ order
 */
export async function getOrderTracking(
  orderId: string
): Promise<CJTrackingInfo> {
  const response = await cjFetch<CJTrackingInfo>(
    `/shopping/order/getOrderDetail`,
    {
      method: "GET",
      params: { orderId },
    }
  );
  return response.data;
}

/**
 * Confirm a CJ order (after payment verification)
 */
export async function confirmCJOrder(orderId: string): Promise<void> {
  await cjFetch(`/shopping/order/confirmOrder`, {
    method: "POST",
    body: { orderId },
  });
}
