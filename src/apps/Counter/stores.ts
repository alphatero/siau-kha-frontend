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
  selectedStandby: string;
}

type Action = {
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setList: (list: State['list']) => void;
  setIsFetch: (isFetch: State['isFetch']) => void;
  setSelectedTable: (selectedTable: State['selectedTable']) => void;
  setSelectedStandby: (selectedStandby: State['selectedStandby']) => void;
}

const defaultState: State = {
  triggerModal: null,
  list: [],
  isFetch: true,
  selectedTable: '',
  selectedStandby: '',
};

export const useStore = create<State & Action>((set) => ({
  ...defaultState,

  setTriggerModal: (triggerModal) => {
    set({ triggerModal });
  },

  setList: (list) => set({ list }),

  setIsFetch: (isFetch) => set({ isFetch }),

  setSelectedTable: (selectedTable) => set({ selectedTable }),

  setSelectedStandby: (selectedStandby) => set({ selectedStandby }),
}));

export default useStore;
