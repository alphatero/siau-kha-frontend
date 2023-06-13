export enum ProductDetailStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  FINISH = 'FINISH',
  SUCCESS = 'SUCCESS',
}

export enum AlertType {
  LOW = 'LOW',
  MIDDLE = 'MIDDLE',
  HIGH = 'HIGH',
}

export interface Product {
  id: string;
  product_name: string;
  note?: string;
  status: ProductDetailStatus;
  order_time: string;
  is_delete: boolean;
}

export interface AlertedProduct extends Product {
  alertType: AlertType;
}
