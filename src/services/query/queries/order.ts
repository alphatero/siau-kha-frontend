import { createQueries } from '@/utils/createQueries';
import * as api from '../api/order';

export const schema = {
  table: {
    fn: api.fetchTable,
  },
} as const;

export const queries = createQueries(schema);
