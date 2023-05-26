import { useQuery } from '@tanstack/react-query';
import { queries } from './queries/order';
import { queries as queriesToken } from './queries/token';

export const useTable = () => useQuery(queries.table());
export const useTags = () => useQuery(queries.tags());
export const usePromotions = () => useQuery(queries.promotions());
export const useProducts = (tagId: string) => useQuery({ ...queries.products(tagId), enabled: !!tagId });
export const useCheckToken = (token: string) => useQuery({ ...queriesToken.checkToken(token), enabled: !!token });

export default useCheckToken;
