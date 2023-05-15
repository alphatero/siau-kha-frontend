export enum TableStatus {
  IDEL = '閒置',
  MEAL = '用餐中',
}

export type TableTypes = {
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

export type ResType = {
  status: 'success'
  message: string;
  data: {
    table_list: ResTableType[]
  }
}

export type ResDataType = {
  list: TableTypes[];
}

export type PromotionType = {
  toggle: boolean;
  id: number;
  name: string;
  discountType: '全單優惠' | '指定商品';
  charge: {
    discount: boolean; // 折扣
    discountPrice?: number; // 打折數 (0.8 = 8折)
    allowance: boolean; // 折讓
    allowancePrice?: number; // 折讓的金額 (100 = 100元)
    chargeProductIds?: number[]; // 指定商品的 id
  };
  period: {
    start: string;
    end: string;
  }
};

export type ModalCategory = 'table' | 'promotion' | 'log' | 'memo' | 'check' | null;

export type TagsType = '套餐' | '肉品' | '沙拉' | '飲料' | '海鮮' | '人氣單點';

export type ProductType = {
  id: number;
  name: string;
  type: '單一' | '套餐';
  tags: TagsType | TagsType[];
  price: number;
  image: string;
  sortNo: number;
}

export type OrderItemType = {
  name: string;
  price: number;
  tags: TagsType | TagsType[];
  quantity: number;
  note: {
    name: string;
    selected: boolean;
  }[];
} | null;
