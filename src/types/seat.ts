export interface ResType<T> {
  status: 'success' | 'error';
  message: string;
  data: T
}

export type ResStandbyType = {
  name: string
  phone: string;
  customer_num: number
}

export type StandbyType = {
  name: string;
  phone: string;
  customerNum: number;
}
