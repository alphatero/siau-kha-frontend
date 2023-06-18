import { useTable } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateList = () => {
  const { setList, list } = useStore();
  const { data, isLoading, refetch } = useTable();

  useEffect(() => {
    if (data) {
      setList(data.list);
    }
  }, [data]);

  return {
    isLoading,
    list,
    refetch,
  };
};

export default useUpdateList;
