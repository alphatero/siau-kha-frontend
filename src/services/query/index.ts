import { useQuery } from '@tanstack/react-query';
import { schema } from './queries/order';

export const useTable = () => useQuery({...schema.table});
export const useTags = () => useQuery({...schema.tags});
export const usePromotions = () => useQuery({ ...schema.promotions });
export const useProducts = (tagId: string) => useQuery({ ...schema.products(tagId), enabled: !!tagId });

export default useTable;
