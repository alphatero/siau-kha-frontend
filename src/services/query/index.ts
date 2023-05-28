import { useQuery } from '@tanstack/react-query';
import { schema } from './queries/order';
import { schema as tokenSchema } from './queries/token';


export const useCheckToken = (token: string) => useQuery({ ...tokenSchema.checkToken(token), enabled: !!token });
export const useTable = () => useQuery({ ...schema.table });
export const useTags = () => useQuery({ ...schema.tags });
export const usePromotions = () => useQuery({ ...schema.promotions });
export const useProducts = (tagId: string) => useQuery({ ...schema.products(tagId), enabled: !!tagId });

export default useCheckToken;
