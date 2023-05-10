import { useTable } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateList = () => {
  const { setList } = useStore();
  const { data, isLoading } = useTable();

  useEffect(() => {
    if (data) {
      setList(data.list);
    }
  }, [data, setList]);

  return {
    isLoading,
  };
};

export default useUpdateList;
