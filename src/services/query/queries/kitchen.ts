import * as api from '../api/kitchen';

export const schema = {
  table: {
    queryKey: ['kitchenTable'],
    queryFn: api.fetchKitchenTables,
  },
  orderDetail: (orderId: string) => ({
    queryKey: ['kitchenOrderDetail', orderId],
    queryFn: () => api.fetchKitchenOrderDetail(orderId),
  }),
};

export default schema;
