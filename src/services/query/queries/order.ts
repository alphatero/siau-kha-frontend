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
} as const;

export const queries = createQueries(schema);
