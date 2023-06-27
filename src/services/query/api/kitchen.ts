import type { AxiosResponse } from 'axios';
import {
  TableStatus,
  ResDataType,
  ResType,
  ResTableType,
  ResOrderDetailType,
  KitchenTableType,
  ActiveOrderDetailType,
} from '@/types/kitchen';
import dayjs from 'dayjs';
import { get } from '@/utils/axios';

const toTableStatus = (status: string): TableStatus => {
  switch (status) {
    case 'IDLE':
      return TableStatus.IDLE;
    case 'MEAL':
      return TableStatus.MEAL;
    default:
      return TableStatus.IDLE;
  }
};

// calculate diff time by minute
const calculateTime = (time: string): string => {
  const now = dayjs();
  const createTime = dayjs(time);
  const duration = now.diff(createTime, 'second');
  // change to mm:ss
  const minute = Math.floor(duration / 60);
  const second = duration % 60;
  return `${minute}:${second}`;
};

const toKitchenTable = (data: ResTableType): KitchenTableType => ({
  id: data.id,
  time: data.create_time ? calculateTime(data.create_time) : '',
  isPay: data.is_pay ?? false,
  status: toTableStatus(data.status),
  name: data.table_name,
  orderId: data.order_id,
  orderDetail: data.order_detail?.map((pArr) => pArr?.map((p) => ({
    ...p,
    orderDetailId: p.order_detail_id,
    productName: p.product_name,
    productQuantity: p.product_quantity,
    orderTime: p.order_time,
    isDelete: p.is_delete,
    productNote: p.product_note,
  }))) || [],
});

const toKitchenOrderDetail = (data: ResOrderDetailType) => ({
  orderDetailId: data.id,
  productDetail: data.product_detail.map((product) => ({
    orderDetailId: product.order_detail_id,
    productName: product.product_name,
    productQuantity: product.product_quantity,
    productNote: product.product_note,
    orderTime: product.order_time,
    isDelete: product.is_delete,
  })) ?? [],
});

export const fetchKitchenTables = async (): Promise<ResDataType<KitchenTableType[]>> => {
  const res: AxiosResponse<ResType<{ table_list: ResTableType[] }>> = await get('/table/list');

  const { data } = res;

  const tables = data.data.table_list ?? [];

  const list: KitchenTableType[] = tables.map((table) => toKitchenTable(table));

  return {
    list,
  };
};

export const fetchKitchenOrderDetail = async (id: string) => {
  const res: AxiosResponse<ResType<{ order_detail: ResOrderDetailType }>> = await get(`/order-detail/?id=${id}`);

  const { data } = res;

  const orderDetails = data.data.order_detail ?? [];

  const actOrderDetail = toKitchenOrderDetail(orderDetails);

  return actOrderDetail;
};

export default fetchKitchenTables;
