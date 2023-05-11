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
