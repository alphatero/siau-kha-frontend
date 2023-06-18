import * as api from '../api/checkout';

export const checkout = {
  getList: (orderId: string) => ({
    queryKey: ['checkoutList', orderId],
    queryFn: () => api.getCheckoutList(orderId),
  }),
};

export default checkout;
