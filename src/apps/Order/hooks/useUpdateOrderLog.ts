import { useOrderLog } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateOrderLog = () => {
  const { table, setOrderLog } = useStore();
  const { orderId } = table;
  const { data, isLoading } = useOrderLog(orderId);

  useEffect(() => {
    if (data) {
      setOrderLog(data.orderLog);
    }
  }, [data]);

  return {
    isLoading,
  };
};

export default useUpdateOrderLog;
