import { create } from 'zustand';
import {
  TableType,
} from '@/types/order';

type State = {
  triggerModal: string | null;
  list: TableType[];
}

type Action = {
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setList: (list: State['list']) => void;
}

const defaultState: State = {
  triggerModal: null,
  list: [],
};

export const useStore = create<State & Action>((set, get) => ({
  ...defaultState,

  setTriggerModal: (triggerModal) => {
    set({ triggerModal });
  },

  setList: (list) => set({ list }),

}));

export default useStore;
