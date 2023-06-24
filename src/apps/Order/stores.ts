import { create } from 'zustand';
import {
  ModalCategory, TableStatus, TableType, ProductType, OrderItemType, TagType, PromotionType,
} from '@/types/order';

type State = {
  table: TableType;
  isReset: boolean;
  list: TableType[];
  products: ProductType[];
  filteredProducts: ProductType[];
  triggerModal: ModalCategory;
  orderList: OrderItemType[];
  orderItem: OrderItemType;
  clickMenuItemTimes: number;
  selectedPromotionId: string;
  tags: TagType[];
  currentTag: TagType;
  promotionList: PromotionType[];
  orderNumber: number;
  orderLog: any;
  currentPromotion: PromotionType | null;
}

type Action = {
  setTable: (table: State['table']) => void;
  setIsReset: (isReset: State['isReset']) => void;
  setList: (list: State['list']) => void;
  setProducts: (products: State['products']) => void;
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setFilteredProductList: (filteredProducts: State['filteredProducts']) => void;
  setOrderList: (orderList: State['orderList']) => void;
  setOrderItem: (orderItem: State['orderItem']) => void;
  setClickMenuItemTimes: (clickMenuItemTimes: State['clickMenuItemTimes']) => void;
  setSelectedPromotionId: (selectedPromotionId: State['selectedPromotionId']) => void;
  setTags: (tags: State['tags']) => void;
  setCurrentTag: (currentTag: State['currentTag']) => void;
  setPromotionList: (promotionList: State['promotionList']) => void;
  resetOrderItem: () => void;
  setOrderNumber: (orderNumber: State['orderNumber']) => void;
  setOrderLog: (orderLog: State['orderLog']) => void;
  setCurrentPromotion: (currentPromotion: State['currentPromotion']) => void;
}

const defaultState: State = {
  table: {
    id: '',
    name: '',
    status: TableStatus.IDLE,
    time: '',
    orderId: '',
    isPay: false,
  },
  isReset: false,
  list: [],
  orderList: [],
  orderItem: {
    idx: 0,
    id: '',
    name: '',
    price: 0,
    tags: '',
    quantity: 1,
    note: [],
  },
  clickMenuItemTimes: 0,
  selectedPromotionId: '',
  currentTag: {
    id: '',
    name: '',
    sortNo: 0,
  },
  tags: [],
  products: [
  ],
  filteredProducts: [],
  triggerModal: null,
  promotionList: [],
  orderNumber: 0,
  orderLog: {},
  currentPromotion: null,
};

export const useStore = create<State & Action>((set) => ({
  ...defaultState,

  setTable: (table) => set({ table }),

  setIsReset: (isReset) => set({ isReset }),

  setList: (list) => set({ list }),

  setTriggerModal: (triggerModal) => set({ triggerModal }),

  setProducts: (products) => set({ products }),

  setFilteredProductList: (filteredProducts) => set({ filteredProducts }),

  setOrderList: (orderList) => set({ orderList }),

  setOrderItem: (orderItem) => set({ orderItem }),

  setClickMenuItemTimes: (clickMenuItemTimes) => set({ clickMenuItemTimes }),

  setSelectedPromotionId: (selectedPromotionId) => set({ selectedPromotionId }),

  setTags: (tags) => set({ tags }),

  setCurrentTag: (currentTag) => set({ currentTag }),

  setPromotionList: (promotionList) => set({ promotionList }),

  resetOrderItem: () => set({ orderItem: defaultState.orderItem }),

  setOrderNumber: (orderNumber) => set({ orderNumber }),

  setOrderLog: (orderLog) => set({ orderLog }),

  setCurrentPromotion: (currentPromotion) => set({ currentPromotion }),
}));

export default useStore;
