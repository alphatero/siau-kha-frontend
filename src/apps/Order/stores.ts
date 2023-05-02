import { create } from 'zustand';

type State = {
  table: {
    id: string;
    name: string;
    status: string;
    time: number;
  }
  isOpenTriggerTable: boolean;
  setTable: (table: State['table']) => void;
  setIsOpenTriggerTable: (isOpenTriggerTable: State['isOpenTriggerTable']) => void;
}

export const useStore = create<State>((set) => ({
  table: {
    id: '',
    name: 'A1',
    status: '閒置',
    time: 0,
  },

  isOpenTriggerTable: false,

  setTable: (table) => set({ table }),

  setIsOpenTriggerTable: (isOpenTriggerTable) => set({ isOpenTriggerTable }),
}));

export default useStore;
