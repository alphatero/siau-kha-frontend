import { useQuery } from '@tanstack/react-query';
import { schema } from './queries/order';
import { schema as tokenSchema } from './queries/token';
import { schema as authSchema } from './queries/auth';

export const useCheckToken = (token: string) => useQuery({ ...tokenSchema.checkToken(token), enabled: !!token });
export const useTable = () => useQuery({ ...schema.table });
export const useTags = () => useQuery({ ...schema.tags });
export const usePromotions = () => useQuery({ ...schema.promotions });
export const useProducts = (tagId: string) => useQuery({ ...schema.products(tagId), enabled: !!tagId });
export const useOrderItem = (productId: string) => useQuery({ ...schema.orderItem(productId), enabled: !!productId });
export const useSignOut = (enabled: boolean) => useQuery({ ...authSchema.signOut, enabled: !!enabled });

export default useCheckToken;
