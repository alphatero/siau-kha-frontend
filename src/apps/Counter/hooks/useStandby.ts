import { useReservation } from '@/services/query';

export const useStandby = () => {
  const { data, isLoading } = useReservation();

  return {
    standbyList: data?.list,
    isLoading,
  };
};

export default useStandby;
