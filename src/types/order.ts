export enum TableStatus {
  IDEL = '閒置',
  MEAL = '用餐中',
}

export type TableType = {
  name: string;
  status: TableStatus;
  time: string;
  unfinished?: number;
  seat?: number;
  customer?: number;
};

export type ResTableType = {
  id: string;
  table_name: string;
  status: TableStatus;
  create_time?: string;
  seat_max?: number;
  customer_num?: number;
  is_pay?: boolean;
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

export type ModalCategory = 'table' | 'promotion' | 'log' | 'memo' | 'check' | null;

export type TagsType = '套餐' | '肉品' | '沙拉' | '飲料' | '海鮮' | '人氣單點';

export type OrderItemType = {
  name: string;
  price: number;
  tags: TagsType | TagsType[];
  quantity: number;
  note: {
    name: string;
    selected: boolean;
  }[];
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
}

export type ResProductType = {
  id: string;
  product_name: string;
  product_type: '1' | '2';
  product_tags: string[];
  product_price: number;
  product_image: string;
}
