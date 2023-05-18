import { useTags } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useProducts = () => {
  const { setTags, tags } = useStore();
  const { data, isLoading } = useTags();

  useEffect(() => {
    if (data) {
      setTags(data.list);
    }
  }, [data]);

  return {
    isLoading,
    tags,
  };
};

export default useProducts;
