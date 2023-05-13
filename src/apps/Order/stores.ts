import { create } from 'zustand';
import { ModalCategory, TableStatus, TableTypes } from '@/types/order';

type State = {
  table: TableTypes;
  list: TableTypes[];
  isOpenTriggerTable: boolean;
  triggerModal: ModalCategory;
  setTable: (table: State['table']) => void;
  setList: (list: State['list']) => void;
  setIsOpenTriggerTable: (isOpenTriggerTable: State['isOpenTriggerTable']) => void;
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
}

export const useStore = create<State>((set) => ({
  table: {
    name: 'A1',
    status: TableStatus.IDEL,
    time: '0',
  },

  list: [],

  isOpenTriggerTable: false,

  triggerModal: null,

  setTable: (table) => set({ table }),

  setList: (list) => set({ list }),

  setIsOpenTriggerTable: (isOpenTriggerTable) => set({ isOpenTriggerTable }),

  setTriggerModal: (triggerModal) => set({ triggerModal }),
}));

export default useStore;
