import { useQuery } from '@tanstack/react-query';
import { queries } from './queries/order';

export const useTable = () => useQuery(queries.table());
export const useTags = () => useQuery(queries.tags());
export const usePromotions = () => useQuery(queries.promotions());

export default useTable;
