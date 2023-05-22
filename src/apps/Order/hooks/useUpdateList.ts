import { useTable, usePromotions } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateList = () => {
  const { setList, setTable, setPromotionList } = useStore();
  const { data, isLoading } = useTable();
  const promotionList = usePromotions().data?.promotions || [];

  useEffect(() => {
    if (data) {
      setList(data.list);
      setTable(data.list[0]);
    }
    if (!!promotionList && promotionList.length > 0) {
      setPromotionList(promotionList);
    }
  }, [data, setList, promotionList]);

  return {
    isLoading,
  };
};

export default useUpdateList;
