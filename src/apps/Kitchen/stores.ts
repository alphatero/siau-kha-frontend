import { create } from 'zustand';
import {
  KitchenTableType,
} from '@/types/kitchen';

type State = {
  tableList: KitchenTableType[];
  activeTabs: string[];
  activeList: KitchenTableType[];
}

type Action = {
  setTableList: (tableList: State['tableList']) => void;
  setActiveTabs: (activeTab: State['activeTabs']) => void;
  setActiveList: (activeList: State['activeList']) => void
}

const defaultState: State = {
  tableList: [],
  activeTabs: [],
  activeList: [],
};

export const useStore = create<State & Action>((set) => ({
  ...defaultState,

  setTableList: (tableList) => set({ tableList }),
  setActiveTabs: (activeTab) => set({ activeTabs: activeTab }),
  setActiveList: (activeList) => set({ activeList }),
}));

export default useStore;
