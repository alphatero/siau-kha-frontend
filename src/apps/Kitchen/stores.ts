import { create } from 'zustand';
import {
  KitchenTableType,
} from '@/types/kitchen';
import {
  TableType,
} from '@/types/order';

type State = {
  tableList: KitchenTableType[];
  activeTabs: string[];
  activeList: TableType[];
  currentTab: string;
  isFirstTimeLoading: boolean;
  tables: TableType[];
}

type Action = {
  setTableList: (tableList: State['tableList']) => void;
  setActiveTabs: (activeTab: State['activeTabs']) => void;
  setActiveList: (activeList: State['activeList']) => void;
  setCurrentTab: (currentTab: State['currentTab']) => void;
  setIsFirstTimeLoading: (isFirstTimeLoading: State['isFirstTimeLoading']) => void;
  setTables: (tables: State['tables']) => void;
}

const defaultState: State = {
  tableList: [],
  activeTabs: [],
  activeList: [],
  currentTab: '',
  isFirstTimeLoading: true,
  tables: [],
};

export const useStore = create<State & Action>((set) => ({
  ...defaultState,

  setTableList: (tableList) => set({ tableList }),
  setActiveTabs: (activeTab) => set({ activeTabs: activeTab }),
  setActiveList: (activeList) => set({ activeList }),
  setCurrentTab: (currentTab) => set({ currentTab }),
  setIsFirstTimeLoading: (isFirstTimeLoading) => set({ isFirstTimeLoading }),
  setTables: (tables) => set({ tables }),
}));

export default useStore;
