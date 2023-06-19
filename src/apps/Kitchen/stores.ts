import { create } from 'zustand';
import {
  KitchenTableType,
} from '@/types/kitchen';

type State = {
  tableList: KitchenTableType[];
  activeTabs: string[];
  activeList: KitchenTableType[];
  currentTab: string;
  isFirstTimeLoading: boolean;
}

type Action = {
  setTableList: (tableList: State['tableList']) => void;
  setActiveTabs: (activeTab: State['activeTabs']) => void;
  setActiveList: (activeList: State['activeList']) => void;
  setCurrentTab: (currentTab: State['currentTab']) => void;
  setIsFirstTimeLoading: (isFirstTimeLoading: State['isFirstTimeLoading']) => void;
}

const defaultState: State = {
  tableList: [],
  activeTabs: [],
  activeList: [],
  currentTab: '',
  isFirstTimeLoading: true,
};

export const useStore = create<State & Action>((set) => ({
  ...defaultState,

  setTableList: (tableList) => set({ tableList }),
  setActiveTabs: (activeTab) => set({ activeTabs: activeTab }),
  setActiveList: (activeList) => set({ activeList }),
  setCurrentTab: (currentTab) => set({ currentTab }),
  setIsFirstTimeLoading: (isFirstTimeLoading) => set({ isFirstTimeLoading }),
}));

export default useStore;
