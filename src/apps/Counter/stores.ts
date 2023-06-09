import { create } from 'zustand';
import {
  TableType,
} from '@/types/order';

type State = {
  triggerModal: string | null;
  list: TableType[];
  isFetch: boolean;
  selectedTable: string;
}

type Action = {
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setList: (list: State['list']) => void;
  setIsFetch: (isFetch: State['isFetch']) => void;
  setSelectedTable: (selectedTable: State['selectedTable']) => void;
}

const defaultState: State = {
  triggerModal: null,
  list: [],
  isFetch: true,
  selectedTable: '',
};

export const useStore = create<State & Action>((set, get) => ({
  ...defaultState,

  setTriggerModal: (triggerModal) => {
    set({ triggerModal });
  },

  setList: (list) => set({ list }),

  setIsFetch: (isFetch) => set({ isFetch }),

  setSelectedTable: (selectedTable) => set({ selectedTable }),

}));

export default useStore;
