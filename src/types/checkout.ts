export type ResOrderDetailType = {
  product_final_price: number;
  product_name: string;
  product_price: number;
  product_quantity: number;
};

export type BillDetailType = {
  finalPrice: number;
  name: string;
  price: number;
  quantity: number;
}

export type ResActivityType = {
  activities_name: string;
  activity_charge: number;
  charge_type: string;
  discount_type: string;
}

export type ActivityType = {
  name: string;
  chargeType: string;
  discountType: string;
  charge: number;
}
