import { useEffect } from 'react';
import { useKitchenTable, useTable } from '@/services/query';
import { useSocket } from '@/hooks/useSocket';

import {
  TableStatus,
} from '@/types/order';

import { useStore } from '../stores';

export const useUpdateTables = () => {
  const {
    activeTabs,
    setActiveTabs,
    tableList,
    setTableList,
    setActiveList,
    currentTab,
    isFirstTimeLoading,
    setIsFirstTimeLoading,
  } = useStore();

  const { socket } = useSocket({ url: 'order' });
  const { data, refetch } = useKitchenTable(currentTab);
  const { data: tableData, isLoading, refetch: tableRefetch } = useTable();

  useEffect(() => {
    if (tableData) {
      setTableList(tableData.list);
      // console.log('tableData', tableData);

      // tableList 第一次更動時，預設顯示正在用餐中前三桌的點單紀錄
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

  useEffect(() => {
    socket?.on('onOrder', (msg: any) => {
      console.log('onOrder', msg);
      const id = msg.order_id;

      const table = tableList.find((item) => item.orderId === id);

      console.log('table', table);
      // setTableList(tableList.map((item) => {
      //   if (item.orderId === id) {
      //     return {
      //       ...item,
      //       orderDetail: msg.order_detail,
      //     };
      //   }
      //   return item;
      // }));
    });
  }, []);

  // tableList 第一次更動時，預設顯示正在用餐中前三桌的點單紀錄
  useEffect(() => {
    if (activeTabs.length > 0) return;
    const firstTimeActiveTabs = tableList
      .filter((table) => table.status === TableStatus.MEAL)
      .slice(0, 3)
      .map((table) => table.name);

    setActiveTabs(firstTimeActiveTabs);
  }, []);

  return {
    isLoading,
    refetch,
  };
};

export default useUpdateTables;
