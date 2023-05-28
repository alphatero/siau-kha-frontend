import * as api from '../api/order';

export const schema = {
  table: {
    queryKey: ['table'],
    queryFn: api.fetchTable,
  },
  tags: {
    queryKey: ['tags'],
    queryFn: api.fetchProductTag,
  },
  promotions: {
    queryKey: ['promotions'],
    queryFn: api.fetchPromotions,
  },
  products: (tagId: string) => ({
    queryKey: ['products', tagId],
    queryFn: () => api.fetchProducts(tagId),
  }),
};

export default schema;
