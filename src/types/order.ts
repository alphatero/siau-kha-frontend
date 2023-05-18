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
