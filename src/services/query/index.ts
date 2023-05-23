import { useQuery } from '@tanstack/react-query';
import { queries } from './queries/order';

export const useTable = () => useQuery(queries.table());
export const useTags = () => useQuery(queries.tags());
export const usePromotions = () => useQuery(queries.promotions());
export const useProducts = (tagId: string) => useQuery({ ...queries.products(tagId), enabled: !!tagId });

export default useTable;
