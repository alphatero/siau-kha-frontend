import { useQuery, useQueries } from '@tanstack/react-query';
import { schema } from './queries/order';
import { schema as tokenSchema } from './queries/token';
import { schema as authSchema } from './queries/auth';
import { schema as kitchenSchema } from './queries/kitchen';
import { seat } from './queries/seat';

export const useCheckToken = (token: string) => useQuery({ ...tokenSchema.checkToken(token), enabled: !!token });
export const useTable = () => useQuery({ ...schema.table });
export const useTags = () => useQuery({ ...schema.tags });
export const usePromotions = () => useQuery({ ...schema.promotions });
export const useProducts = (tagId: string) => useQuery({ ...schema.products(tagId), enabled: !!tagId });
export const useSignOut = (enabled: boolean) => useQuery({ ...authSchema.signOut, enabled: !!enabled });
export const useReservation = () => useQuery({ ...seat.getReservation, enabled: false });
export const useKitchenTable = (currentTab: string) => useQuery({ ...kitchenSchema.table(currentTab), refetchInterval: 15000 });
export const useKitchenOrderDetail = (orderId: string) => useQuery({ ...kitchenSchema.orderDetail(orderId), enabled: false });
export const useKitchenOrderDetails = (orderIds: string[]) => useQueries({
  queries: orderIds.map((orderId) => ({
    ...kitchenSchema.orderDetail(orderId),
    enabled: false,
  })),
});

export default useCheckToken;
