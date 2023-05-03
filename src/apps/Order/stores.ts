import { create } from 'zustand';
import { TableStatus, TableTypes } from '@/types/order';

type State = {
  table: TableTypes;
  isOpenTriggerTable: boolean;
  setTable: (table: State['table']) => void;
  setIsOpenTriggerTable: (isOpenTriggerTable: State['isOpenTriggerTable']) => void;
}

export const useStore = create<State>((set) => ({
  table: {
    name: 'A1',
    status: TableStatus.IDEL,
    time: '0',
  },

  isOpenTriggerTable: false,

  setTable: (table) => set({ table }),

  setIsOpenTriggerTable: (isOpenTriggerTable) => set({ isOpenTriggerTable }),
}));

export default useStore;
