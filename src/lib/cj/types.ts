export interface CJProduct {
  pid: string;
  productName: string;
  productImage: string;
  productWeight: string;
  categoryId: string;
  categoryName: string;
  description: string;
  sellPrice: number;
  variants: CJVariant[];
}

export interface CJVariant {
  vid: string;
  variantName: string;
  variantImage: string;
  variantSku: string;
  variantPrice: number;
  variantWeight: string;
  variantVolume: string;
}

export interface CJInventory {
  vid: string;
  warehouseCode: string;
  warehouseName: string;
  quantity: number;
}

export interface CJOrderPayload {
  orderNumber: string;
  shippingZip: string;
  shippingCountry: string;
  shippingCountryCode: string;
  shippingProvince: string;
  shippingCity: string;
  shippingAddress: string;
  shippingCustomerName: string;
  shippingPhone: string;
  remark: string;
  products: CJOrderProduct[];
}

export interface CJOrderProduct {
  vid: string;
  quantity: number;
}

export interface CJOrderResponse {
  orderId: string;
  orderNum: string;
  cjOrderId: string;
}

export interface CJTrackingInfo {
  trackingNumber: string;
  logisticsStatus: string;
  trackInfo: CJTrackEvent[];
}

export interface CJTrackEvent {
  date: string;
  status: string;
  description: string;
}

export interface CJProductSearchParams {
  productNameEn?: string;
  categoryId?: string;
  pageNum?: number;
  pageSize?: number;
}

export interface CJProductListResponse {
  list: CJProduct[];
  pageNum: number;
  pageSize: number;
  total: number;
}
