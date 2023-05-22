import { create } from 'zustand';
import {
  ModalCategory, TableStatus, TableType, ProductType, OrderItemType, TagType,
} from '@/types/order';

type State = {
  table: TableType;
  list: TableType[];
  products: ProductType[];
  filteredProducts: ProductType[];
  triggerModal: ModalCategory;
  orderList: OrderItemType[];
  orderItem: OrderItemType;
  selectedPromotionId: string;
  tags: TagType[];
}

type Action = {
  setTable: (table: State['table']) => void;
  setList: (list: State['list']) => void;
  setProducts: (products: State['products']) => void;
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setFilteredProductList: (filteredProducts: State['filteredProducts']) => void;
  setOrderList: (orderList: State['orderList']) => void;
  setOrderItem: (orderItem: State['orderItem']) => void;
  setSelectedPromotionId: (selectedPromotionId: State['selectedPromotionId']) => void;
  setTags: (tags: State['tags']) => void;
}

const defaultState: State = {
  table: {
    name: 'A1',
    status: TableStatus.IDEL,
    time: '0',
  },
  list: [],
  orderList: [
    {
      name: '豪華全牛套餐',
      price: 1980,
      tags: '肉品',
      quantity: 1,
      note: [
        {
          name: '加大',
          selected: false,
        },
        {
          name: '減量',
          selected: false,
        },
      ],
    },
    {
      name: '澳洲極上牛舌',
      price: 790,
      tags: '肉品',
      quantity: 1,
      note: [
        {
          name: '加大',
          selected: true,
        },
        {
          name: '減量',
          selected: false,
        },
      ],
    },
    {
      name: '可爾必思',
      price: 140,
      tags: '飲料',
      quantity: 1,
      note: [
        {
          name: '去冰',
          selected: false,
        },
        {
          name: '微冰',
          selected: false,
        },
        {
          name: '少冰',
          selected: true,
        },
        {
          name: '正常冰',
          selected: false,
        },
      ],
    },
  ],
  orderItem: {
    name: '',
    price: 0,
    tags: '人氣單點',
    quantity: 1,
    note: [],
  },
  selectedPromotionId: '',
  tags: [
    {
      id: '1',
      name: '',
      sortNo: 1,
    },
  ],
  products: [
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
  ],
  filteredProducts: [],
  triggerModal: null,
};

export const useStore = create<State & Action>((set) => ({
  ...defaultState,

  setTable: (table) => set({ table }),

  setList: (list) => set({ list }),

  setTriggerModal: (triggerModal) => set({ triggerModal }),

  setProducts: (products) => set({ products }),

  setFilteredProductList: (filteredProducts) => set({ filteredProducts }),

  setOrderList: (orderList) => set({ orderList }),

  setOrderItem: (orderItem) => set({ orderItem }),

  setSelectedPromotionId: (selectedPromotionId) => set({ selectedPromotionId }),

  setTags: (tags) => set({ tags }),
}));

export default useStore;
