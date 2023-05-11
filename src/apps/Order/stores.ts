import { create } from 'zustand';
import { TableStatus, TableTypes } from '@/types/order';

type State = {
  table: TableTypes;
  list: TableTypes[];
  isOpenTriggerTable: boolean;
  setTable: (table: State['table']) => void;
  setList: (list: State['list']) => void;
  setIsOpenTriggerTable: (isOpenTriggerTable: State['isOpenTriggerTable']) => void;
}

export const useStore = create<State>((set) => ({
  table: {
    name: 'A1',
    status: TableStatus.IDEL,
    time: '0',
  },

  list: [],

  isOpenTriggerTable: false,

  setTable: (table) => set({ table }),

  setList: (list) => set({ list }),

  setIsOpenTriggerTable: (isOpenTriggerTable) => set({ isOpenTriggerTable }),
}));

export default useStore;
