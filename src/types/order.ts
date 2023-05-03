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
