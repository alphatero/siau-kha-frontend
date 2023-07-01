// === kitchen-common ===
export enum ProductDetailStatus {
  ALL = 'ALL',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISH = 'FINISH',
  SUCCESS = 'SUCCESS',
}

export enum AlertType {
  LOW = 'LOW',
  MIDDLE = 'MIDDLE',
  HIGH = 'HIGH',
}

export enum TableStatus {
  IDLE = 'IDLE',
  MEAL = 'MEAL',
}

export type ResType<T> = {
  status: 'success'
  message: string;
  data: T
}

export type ResProductDetailType = {
  id: string;
  order_detail_id: string;
  product_name: string;
  product_quantity: number;
  product_note: string[];
  status: string;
  is_delete: boolean;
  order_time: string;
}

export type ResOrderDetailType = {
  id: string;
  product_detail: ResProductDetailType[];
  create_time: string;
}

export type ResTableType = {
  id: string;
  table_name: string;
  status: TableStatus;
  create_time?: string;
  seat_max?: number;
  customer_num?: number;
  is_pay?: boolean;
  order_id: string;
  order_detail?: ResProductDetailType[][];
}

export type ResDataType<T> = {
  list: T;
}

// === kitchen-table ===
export type ProductDetailType = {
  id: string;
  orderDetailId: string;
  productName: string;
  productQuantity: number;
  productNote: string[];
  status: string;
  isDelete: boolean;
  orderTime: string;
};

export type KitchenTableType = {
  id: string,
  time: string,
  isPay: boolean,
  status: TableStatus,
  name: string,
  orderId: string,
  orderDetail?: ProductDetailType[][],
}

// === kitchen-order ===

export interface ActiveOrderDetailType {
  orderDetailId: string;
  productDetail: ProductDetailType[];
}

export interface ActiveOrderType {
  orderId: string;
  orderDetail?: ActiveOrderDetailType[];
}

export interface OrderDetailType {
  id: string;
  isDelete: boolean;
  orderDetailId: string;
  orderTime: string;
  name: string;
  note: string[];
  quantity: number;
  status: string;
}

export interface ResDetailType {
  id: string;
  is_delete: boolean;
  order_detail_id: string;
  order_time: string;
  product_name: string;
  product_note: string[];
  product_quantity: number;
  status: string;
}

export interface AlertedProductType extends OrderDetailType {
  alertType: AlertType;
}
