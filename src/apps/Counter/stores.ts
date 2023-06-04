import { create } from 'zustand';
import {
  TableType,
} from '@/types/order';

type State = {
  triggerModal: string | null;
  list: TableType[];
  isFetch: boolean;
}

type Action = {
  setTriggerModal: (triggerModal: State['triggerModal']) => void;
  setList: (list: State['list']) => void;
  setIsFetch: (isFetch: State['isFetch']) => void;
}

const defaultState: State = {
  triggerModal: null,
  list: [],
  isFetch: true,
};

export const useStore = create<State & Action>((set, get) => ({
  ...defaultState,

  setTriggerModal: (triggerModal) => {
    set({ triggerModal });
  },

  setList: (list) => set({ list }),

  setIsFetch: (isFetch) => set({ isFetch }),

}));

export default useStore;
