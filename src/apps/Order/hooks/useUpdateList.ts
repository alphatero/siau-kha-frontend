import { useTable } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateList = () => {
  const { setList, setTable } = useStore();
  const { data, isLoading } = useTable();

  useEffect(() => {
    if (data) {
      setList(data.list);
      setTable(data.list[0]);
    }
  }, [data, setList]);

  return {
    isLoading,
  };
};

export default useUpdateList;
