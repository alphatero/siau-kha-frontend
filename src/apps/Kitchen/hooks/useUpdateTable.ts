import { useEffect } from 'react';
import { useKitchenTable } from '@/services/query';
import { useSocket } from '@/hooks/useSocket';

import {
  TableStatus,
} from '@/types/kitchen';

import { useStore } from '../stores';

export const useUpdateTables = () => {
  const {
    activeTabs, setActiveTabs,
    tableList, setTableList,
    currentTab,
    setIsFirstTimeLoading,
  } = useStore();
  const { data, isLoading } = useKitchenTable(currentTab);
  const { socket } = useSocket({ url: 'order' });

  useEffect(() => {
    if (data) {
      const getActiveTableList = data.list;
      setTableList(getActiveTableList);
      setIsFirstTimeLoading(false);
    }
  }, [data]);

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
  }, [tableList]);

  return {
    isLoading,
  };
};

export default useUpdateTables;
