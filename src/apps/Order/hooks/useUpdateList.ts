import { useTable, usePromotions } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateList = () => {
  const {
    setList, setPromotionList, table, setTable,
  } = useStore();
  const { data, isLoading } = useTable();
  const promotionList = usePromotions().data?.promotions || [];

  useEffect(() => {
    if (data) {
      setList(data.list);

      // 同步已選的 table 資訊
      const updateTable = data.list.find((d) => d.id === table.id);
      if (updateTable) setTable(updateTable);
    }
    if (!!promotionList && promotionList.length > 0) {
      setPromotionList(promotionList);
    }
  }, [data]);

  return {
    isLoading,
  };
};

export default useUpdateList;
