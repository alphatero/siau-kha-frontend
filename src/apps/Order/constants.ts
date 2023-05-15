import { PromotionType } from '@/types/order';

type tagsType = '套餐' | '肉品' | '沙拉' | '飲料' | '海鮮' | '人氣單點';

type MainProductItemType = {
  id: number;
  name: string;
  type: '單一' | '套餐';
  tags: tagsType | tagsType[];
  price: number;
  image: string;
  sortNo: number;
};

type OrderListType = {
  name: string;
  price: number;
  quantity: number;
  note: string;
};

const MainProductList: MainProductItemType[] = [
  {
    id: 1,
    name: 'A5 日本和牛套餐',
    type: '單一',
    tags: '肉品',
    price: 2200,
    image: '/images/01.jpg',
    sortNo: 1,
  },
  {
    id: 3,
    name: '豪華全牛套餐',
    type: '單一',
    tags: '肉品',
    price: 1980,
    image: '/images/02.jpg',
    sortNo: 4,
  },
  {
    id: 8,
    name: '經典霜降牛套餐',
    type: '單一',
    tags: '肉品',
    price: 1880,
    image: '/images/03.jpg',
    sortNo: 9,
  },
];

const OrderList: OrderListType[] = [
  {
    name: '豪華全牛套餐',
    price: 1980,
    quantity: 1,
    note: '',
  },
  {
    name: '澳洲極上牛舌',
    price: 790,
    quantity: 1,
    note: '加大',
  },
  {
    name: '可爾必思',
    price: 140,
    quantity: 1,
    note: '少冰',
  },
];

const PromotionList: PromotionType[] = [
  {
    toggle: false,
    id: 1,
    name: '生日優惠',
    discountType: '全單優惠',
    charge: {
      discount: true,
      discountPrice: 0.8,
      allowance: false,
    },
    period: {
      start: '2023/01/01',
      end: '2023/12/31',
    },
  },
  {
    toggle: false,
    id: 2,
    name: '打卡優惠',
    discountType: '指定商品',
    charge: {
      discount: false,
      allowance: true,
      allowancePrice: 100,
      chargeProductIds: [1, 2, 3],
    },
    period: {
      start: '2023/05/01',
      end: '2023/08/31',
    },
  },
];

export const Constants = {
  MainProductList,
  OrderList,
  PromotionList,
};

export default Constants;
