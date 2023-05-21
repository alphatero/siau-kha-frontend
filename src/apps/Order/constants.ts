import {
  PromotionType, ProductType, OrderItemType,
} from '@/types/order';

const MainProductList: ProductType[] = [
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

const PromotionList: PromotionType[] = [
  {
    toggle: false,
    id: '1',
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
    id: '2',
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
  PromotionList,
};

export default Constants;
