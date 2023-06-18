import { useEffect } from 'react';
import { useKitchenTable } from '@/services/query';

import {
  TableStatus,
} from '@/types/kitchen';

import { useStore } from '../stores';

export const useUpdateTables = () => {
  const {
    activeTabs, setActiveTabs,
    tableList, setTableList,
  } = useStore();
  const { data, isLoading } = useKitchenTable();

  useEffect(() => {
    if (data) {
      const getActiveTableList = data.list;
      setTableList(getActiveTableList);
    }
  }, [data]);

  // tableList 第一次更動時，預設顯示正在用餐中前三桌的點單紀錄
  useEffect(() => {
    if (activeTabs.length > 0) return;
    const firstTimeActiveTabs = tableList
      .filter((table) => table.status === TableStatus.MEAL)
      .slice(0, 3)
      .map((table) => table.name);

    setActiveTabs(firstTimeActiveTabs);
  }, [tableList]);

  return {
    isLoading,
  };
};

export default useUpdateTables;
