import { createQueries } from '@/utils/createQueries';
import * as api from '../api/token';

export const schema = {
  checkToken: (token: string) => ({
    key: [token],
    fn: () => api.checkToken(token),
  }),
} as const;

export const queries = createQueries(schema);
