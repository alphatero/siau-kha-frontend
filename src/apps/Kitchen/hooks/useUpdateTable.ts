import { useEffect } from 'react';
import { useTable } from '@/services/query';
// import { useSocket } from '@/hooks/useSocket';

import {
  TableStatus,
} from '@/types/order';

import { useStore } from '../stores';

export const useUpdateTables = () => {
  const {
    activeTabs,
    setActiveTabs,
    setActiveList,
    isFirstTimeLoading,
    setIsFirstTimeLoading,
    setTables,
  } = useStore();

  // const { socket } = useSocket({ url: 'order' });
  const { data: tableData, isLoading: isTableLoading, refetch: tableRefetch } = useTable();

  useEffect(() => {
    if (tableData) {
      setTables(tableData.list);

      if (isFirstTimeLoading) {
        const firstTimeActiveTabs = tableData.list
          .filter((table) => table.status === TableStatus.MEAL)
          .slice(0, 3)
          .map((table) => table.id);

        setActiveTabs(firstTimeActiveTabs);
      }

      // 更新點單紀錄
      const activeTable = tableData.list.filter((table) => activeTabs.includes(table.id));
      setActiveList(activeTable);

      setIsFirstTimeLoading(false);
    }
  }, [tableData]);

  // useEffect(() => {
  //   socket?.on('onOrder', (msg: any) => {
  //     console.log('onOrder', msg);
  //     const id = msg.order_id;

  //     const table = tableList.find((item) => item.orderId === id);

  //     console.log('table', table);
  //   });
  // }, []);

  return {
    isTableLoading,
    tableRefetch,
  };
};

export default useUpdateTables;
