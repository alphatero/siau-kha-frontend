import { create } from 'zustand';
import {
  TableStatus,
  TableType,
} from '@/types/order';

type State = {
  triggerModal: string | null;
  list: TableType[];
  isFetch: boolean;
  selectedTable: string;
  selectedCheckout: string;
  selectedStandby: string;
}

type Action = {
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setList: (list: State['list']) => void;
  setIsFetch: (isFetch: State['isFetch']) => void;
  setSelectedTable: (selectedTable: State['selectedTable']) => void;
  setSelectedStandby: (selectedStandby: State['selectedStandby']) => void;
  setTableOnMeal: (id: string, customerNum: number) => void;
  setSelectedCheckout: (selectedCheckout: State['selectedCheckout']) => void;
}

const defaultState: State = {
  triggerModal: null,
  list: [],
  isFetch: true,
  selectedTable: '',
  selectedStandby: '',
  selectedCheckout: '',
};

export const useStore = create<State & Action>((set, get) => ({
  ...defaultState,

  setTriggerModal: (triggerModal) => {
    set({ triggerModal });
  },

  setList: (list) => set({ list }),

  setIsFetch: (isFetch) => set({ isFetch }),

  setSelectedTable: (selectedTable) => set({ selectedTable }),

  setTableOnMeal: (id, customerNum) => {
    const updateList = get().list.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          status: TableStatus.MEAL,
          customer: customerNum,
        };
      }
      return t;
    });
    set({ list: updateList });
  },

  setSelectedStandby: (selectedStandby) => set({ selectedStandby }),

  setSelectedCheckout: (selectedCheckout) => set({ selectedCheckout }),
}));

export default useStore;
