import { useReservation } from '@/services/query';
import { useEffect, useState } from 'react';

export const useStandby = () => {
  const [enabled, setEnabled] = useState(true);
  const {
    data, isLoading, refetch,
  } = useReservation();

  useEffect(() => {
    refetch();
  }, []);

  return {
    standbyList: data?.list,
    isLoading,
    enabled,
    setEnabled,
    refetch,
  };
};

export default useStandby;
