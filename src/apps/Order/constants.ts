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

export const Constants = {
  MainProductList,
  OrderList,
};

export default Constants;
