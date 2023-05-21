import { create } from 'zustand';
import {
  ModalCategory, TableStatus, TableType, ProductType, TagType,
} from '@/types/order';

type State = {
  table: TableType;
  list: TableType[];
  products: ProductType[];
  filteredProducts: ProductType[];
  triggerModal: ModalCategory;
  tags: TagType[];
}

type Action = {
  setTable: (table: State['table']) => void;
  setList: (list: State['list']) => void;
  setProducts: (products: State['products']) => void;
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setFilteredProductList: (filteredProducts: State['filteredProducts']) => void;
  setTags: (tags: State['tags']) => void;
}

const defaultState: State = {
  table: {
    name: 'A1',
    status: TableStatus.IDEL,
    time: '0',
  },
  list: [],
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

  setTags: (tags) => set({ tags }),
}));

export default useStore;
