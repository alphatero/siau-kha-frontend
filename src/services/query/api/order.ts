import type { AxiosResponse } from 'axios';
import {
  TableStatus,
  TableType,
  ResDataType,
  ResType,
  ResTableType,
  ResTagType,
  TagType,
  ActivityType,
  PromotionType,
  PromotionDiscountType,
  ProductType,
  ResProductType,
} from '@/types/order';
import dayjs from 'dayjs';
import { get } from '@/utils/axios';

const convertTime = (time: string, formatSpec: string): string => {
  const date = dayjs(time);
  return date.format(formatSpec);
};

const toDiscountType = (discountType: string): PromotionDiscountType => {
  switch (discountType) {
    case '0':
      return PromotionDiscountType.ALL;
    case '1':
      return PromotionDiscountType.PRODUCT;
    default:
      return PromotionDiscountType.ALL;
  }
};

const toPromotions = (data: ActivityType): PromotionType => ({
  toggle: false,
  id: data.id,
  name: data.activities_name,
  discountType: toDiscountType(data.discount_type),
  charge: {
    discount: data.charge_type === '0', // 折扣
    discountPrice: data.discount, // 打折數 (0.8 = 8折)
    allowance: data.charge_type === '1', // 折讓
    allowancePrice: data.discount, // 折讓的金額 (100 = 100元)
    chargeProductIds: data.act_products_list, // 指定商品的 id
  },
  period: {
    start: convertTime(data.start_time, 'YYYY/MM/DD'),
    end: convertTime(data.end_time, 'YYYY/MM/DD'),
  },
});

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

const toTable = (data: ResTableType) => ({
  id: data.id,
  time: data.create_time ? calculateTime(data.create_time) : '',
  customer: data.customer_num ?? 0,
  isPay: data.is_pay ?? false,
  seat: data.seat_max ?? 0,
  status: toTableStatus(data.status),
  name: data.table_name,
});

const toTag = (data: ResTagType) => ({
  id: data.id,
  name: data.tag_name,
  sortNo: data.sort_no,
});

const toProduct = (data: ResProductType) => ({
  id: data.id,
  name: data.product_name,
  price: data.product_price,
  tags: data.product_tags,
  type: data.product_type === '2' ? '套餐' : '單點',
  image: data.product_image,
  note: data.product_note.map((note) => ({
    title: note.note_title,
    isFoodConsumption: note.is_food_consumption,
  })),
});

export const fetchProductTag = async (): Promise<ResDataType<TagType[]>> => {
  const res: AxiosResponse<ResType<{ product_tags: ResTagType[] }>> = await get('/product/tags');

  const { data } = res;
  const tags = data.data.product_tags ?? [];

  const list: TagType[] = tags.map((tag) => toTag(tag));

  return {
    list,
  };
};

export const fetchProducts = async (tagId: string): Promise<ResDataType<ProductType[]>> => {
  const res: AxiosResponse<ResType<{ product_list: ResProductType[] }>> = await get(`/product/list?tag_id=${tagId}`);

  const { data } = res;
  const products = data.data.product_list ?? [];

  const list: ProductType[] = products.map((product) => toProduct(product));

  return {
    list,
  };
};

export const fetchPromotions = async (): Promise<{
  promotions: PromotionType[]
}> => {
  const res: AxiosResponse<ResType<{ activities: ActivityType[] }>> = await get('/activities/list');

  const { data } = res;

  const activities = data.data.activities ?? [];

  const promotions: PromotionType[] = activities.map((activity) => toPromotions(activity));

  return {
    promotions,
  };
};

export const fetchTable = async (): Promise<ResDataType<TableType[]>> => {
  const res: AxiosResponse<ResType<{ table_list: ResTableType[] }>> = await get('/table/list');

  const { data } = res;

  const tables = data.data.table_list ?? [];

  const list: TableType[] = tables.map((table) => toTable(table));

  return {
    list,
  };
};

export default fetchTable;
