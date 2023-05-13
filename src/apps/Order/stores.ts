import { create } from 'zustand';
import { ModalCategory, TableStatus, TableTypes } from '@/types/order';

type State = {
  table: TableTypes;
  list: TableTypes[];
  triggerModal: ModalCategory;
  setTable: (table: State['table']) => void;
  setList: (list: State['list']) => void;
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
}

export const useStore = create<State>((set) => ({
  table: {
    name: 'A1',
    status: TableStatus.IDEL,
    time: '0',
  },

  list: [],

  triggerModal: null,

  setTable: (table) => set({ table }),

  setList: (list) => set({ list }),

  setTriggerModal: (triggerModal) => set({ triggerModal }),
}));

export default useStore;
