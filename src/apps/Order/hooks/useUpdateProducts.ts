import { useTags, useProducts } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';

export const useUpdateProducts = () => {
  const {
    setTags, tags, currentTag, setCurrentTag, setProducts, setFilteredProductList,
  } = useStore();
  const { data } = useTags();
  const { data: productsData, isLoading } = useProducts(currentTag?.id ?? '');

  useEffect(() => {
    if (data) {
      setTags(data.list);

      if (currentTag.id !== data.list[0].id) {
        setCurrentTag(data.list[0]);
      }
    }
  }, [data]);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.list);
      setFilteredProductList(productsData.list);
    }
  }, [productsData]);

  return {
    isLoading,
    tags,
  };
};

export default useUpdateProducts;
