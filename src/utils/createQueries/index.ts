/* eslint-disable no-restricted-syntax */
import type { Schema, Queries } from './type';

export type { Schema, Queries };

// 將 schema 轉換成 queries 物件，但因為 schema 的型別是 const，所以這裡要用 as const，固定型別為物件，其他型別會報錯。
export const createQueries = <T extends Schema>(schema: T) => {
  const queries = {} as Queries<typeof schema>;

  // eslint-disable-next-line guard-for-in
  for (const key in schema) {
    const item = schema[key];

    if (typeof item === 'object') {
      queries[key] = () => ({
        queryKey: [key],
        queryFn: item.fn,
      });
    } else {
      queries[key] = (...args: any) => ({
        queryKey: [key, ...item(...args).key],
        queryFn: item(...args).fn,
      });
    }
  }

  return queries;
};
