import { useEffect } from 'react';
import { useKitchenTable } from '@/services/query';
import { TableStatus } from '@/types/kitchen';

import { useStore } from '../stores';

export const useUpdateTables = () => {
  const {
    activeTabs,
    setActiveTabs,
    setTableList,
    setActiveList,
    currentTab,
    isFirstTimeLoading,
    setIsFirstTimeLoading,
  } = useStore();
  const { data, isLoading, refetch } = useKitchenTable(currentTab);

  useEffect(() => {
    if (data) {
      setTableList(data.list);

      // tableList 第一次更動時，預設顯示正在用餐中前三桌的點單紀錄
      if (isFirstTimeLoading) {
        const firstTimeActiveTabs = data.list
          .filter((table) => table.status === TableStatus.MEAL)
          .slice(0, 3)
          .map((table) => table.id);

        setActiveTabs(firstTimeActiveTabs);
      }

      // 更新點單紀錄
      const activeTable = data.list.filter((table) => activeTabs.includes(table.id));
      setActiveList(activeTable);

      setIsFirstTimeLoading(false);
    }
  }, [data]);

  return {
    isLoading,
    refetch,
  };
};

export default useUpdateTables;
