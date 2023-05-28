import { useQuery } from '@tanstack/react-query';
import { schema } from './queries/order';
import { schema as authSchema } from './queries/auth';

export const useTable = () => useQuery({ ...schema.table });
export const useTags = () => useQuery({ ...schema.tags });
export const usePromotions = () => useQuery({ ...schema.promotions });
export const useProducts = (tagId: string) => useQuery({ ...schema.products(tagId), enabled: !!tagId });
export const useSignOut = (enabled: boolean) => useQuery({ ...authSchema.signOut, enabled: !!enabled });

export default useTable;
