import { useTable, usePromotions } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateList = () => {
  const { setList, setPromotionList } = useStore();
  const { data, isLoading } = useTable();
  const promotionList = usePromotions().data?.promotions || [];

  useEffect(() => {
    if (data) {
      setList(data.list);
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
