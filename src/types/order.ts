import { ProductDetailStatus } from './kitchen';

export enum TableStatus {
  IDLE = '閒置',
  MEAL = '用餐中',
}

export enum MealType {
  SINGLE = '單品',
  SET = '套餐',
}

export type ResProductDetailType = {
  id: string;
  product_name: string;
  product_price: string;
  product_quantity: string;
  product_note: string;
  product_final_price: string;
  status: string;
  is_delete: boolean;
}

export type ResOrderDetailType = {
  id: string;
  is_delete: boolean;
  order_detail_id: string;
  order_time: string;
  product_name: string;
  product_note: string[];
  product_quantity: number;
  status: string;
}

export type TableType = {
  id: string;
  name: string;
  status: TableStatus;
  time: string;
  unfinished?: number;
  seat?: number;
  customer?: number;
  isPay: boolean;
  orderId: string;
  orderDetail?: ResOrderDetailType[];
};

export type ResTableType = {
  id: string;
  table_name: string;
  status: TableStatus;
  create_time?: string;
  seat_max?: number;
  customer_num?: number;
  is_pay?: boolean;
  order_id: string;
  order_detail?: ResOrderDetailType[];
}

export type ResType<T> = {
  status: 'success'
  message: string;
  data: T
}

export type ResDataType<T> = {
  list: T;
}

export type ActivityType = {
  id: string; // 活動 id
  activities_name: string; // 活動名稱
  discount_type: '0' | '1'; // 計算類別，0-全單優惠、1-指定商品
  charge_type: '0' | '1'; // 計算類型，0-折扣、1-折讓
  min_spend: number; // 最低消費金額
  discount: number;
  is_period: boolean; // 是否為期間限定
  start_time: string; // 活動開始時間
  end_time: string; // 活動結束時間
  act_products_list: string[]; // 指定商品
}

export enum PromotionDiscountType {
  ALL = '全單優惠',
  PRODUCT = '指定商品',
}

export type PromotionType = {
  toggle: boolean;
  id: string;
  name: string;
  discountType: PromotionDiscountType;
  charge: {
    discount: boolean; // 折扣
    discountPrice?: number; // 打折數 (0.8 = 8折)
    allowance: boolean; // 折讓
    allowancePrice?: number; // 折讓的金額 (100 = 100元)
    chargeProductIds?: string[]; // 指定商品的 id
  };
  period: {
    start: string;
    end: string;
  }
};

export type ModalCategory = 'table' | 'promotion' | 'log' | 'memo' | 'check' | 'clean' | null;

export type OrderItemType = {
  idx: number;
  id: string;
  name: string;
  price: number;
  tags: string | string[];
  quantity: number;
  note: {
    title: string;
  }[];
  currentNote?: string;
};

export type ResTagType = {
  id: string;
  tag_name: string;
  sort_no: number;
}

export type TagType = {
  id: string;
  name: string;
  sortNo: number;
}

export type ProductType = {
  id: string;
  name: string;
  type: string;
  tags: string | string[];
  price: number;
  image: string;
  note: {
    title: string;
  }[];
}

export type ProductNoteType = {
  note_title: string;
  use_momey: number; // 影響金額
  is_food_consumption: boolean; // 是否消耗食材
  note_food_consumption_list?: { // (註記)食材消耗清單
    note_food_id: string; // (註記)食材id
    note_food_name: string; // (註記)食材名稱
    note_food_quantity: number; // (註記)消耗食材數量
    note_food_unit: string; // (註記)食材單位
  }[];
}

export type ResProductType = {
  id: string;
  product_name: string;
  product_type: '1' | '2';
  product_tags: string[];
  product_price: number;
  product_image: string;
  product_note: ProductNoteType[];
}

export type ResProductItemType = {
  id: string;
  product_name: string;
  product_type: '0' | '1'; // 0-單品 MealType.SINGLE | 1-套餐 MealType.SET
  product_tags: string | string[];
  product_price: number;
  product_note: ProductNoteType[];
}

export type ProductDetailType = {
  product_id: string;
  product_quantity: number;
  product_note: string[];
}

export type ResLogProductType = {
  id: string;
  is_delete: boolean;
  product_name: string;
  product_note: string[];
  product_price: number;
  product_quantity: number;
  status: ProductDetailStatus;
}

export type ResLogDetailType = {
  id: string;
  create_time: string;
  product_detail: ResLogProductType[];
}

export type ResLogType = {
  order_detail: ResLogDetailType[];
  total: number;
}

export type ModalLogListDetailType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  note: string[];
  status: ProductDetailStatus;
  isDelete: boolean;
}

export type ModalLogListType = {
  id: string;
  createTime: string;
  detail: ModalLogListDetailType[];
}

export type ModalLogType = {
  orderLogList: ModalLogListType[],
  total: number;
};
