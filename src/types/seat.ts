export interface ResType<T> {
  status: 'success' | 'error';
  message: string;
  data: T
}

export type ResStandbyType = {
  id: string;
  name: string
  phone: string;
  customer_num: number
}

export type StandbyType = {
  id: string;
  name: string;
  phone: string;
  customerNum: number;
}

export type MealStandbyType = {
  id: string;
  tableId: string
  customerNum: number;
}
