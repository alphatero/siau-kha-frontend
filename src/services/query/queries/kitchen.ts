import * as api from '../api/kitchen';

export const schema = {
  table: (currentTab: string) => ({
    queryKey: ['kitchenTable', currentTab],
    queryFn: () => api.fetchKitchenTables(),
  }),
  orderDetail: (orderId: string) => ({
    queryKey: ['kitchenOrderDetail', orderId],
    queryFn: () => api.fetchKitchenOrderDetail(orderId),
  }),
};

export default schema;
