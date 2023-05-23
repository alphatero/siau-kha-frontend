import { createQueries } from '@/utils/createQueries';
import * as api from '../api/order';

export const schema = {
  table: {
    fn: api.fetchTable,
  },
  tags: {
    fn: api.fetchProductTag,
  },
  promotions: {
    fn: api.fetchPromotions,
  },
  products: (tagId: string) => ({
    key: [tagId],
    fn: () => api.fetchProducts(tagId),
  }),
} as const;

export const queries = createQueries(schema);
