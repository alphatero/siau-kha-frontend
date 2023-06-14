import { useOrderLog } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateOrderLog = () => {
  const { setOrderLog } = useStore();
  const { data, isLoading } = useOrderLog('傳進去的參數-id');
  // const promotionList = usePromotions().data?.promotions || [];

  useEffect(() => {
    if (data) {
      console.log('useUpdateOrderLog data.orderLog:');
      setOrderLog(data.orderLog);
    }
  }, [data]);

  return {
    isLoading,
  };
};

export default useUpdateOrderLog;
