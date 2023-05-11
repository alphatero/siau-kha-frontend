import type { Schema, Queries } from './type';

export type { Schema, Queries };

// 將 schema 轉換成 queries 物件，但因為 schema 的型別是 const，所以這裡要用 as const，固定型別為物件，其他型別會報錯。
export const createQueries = <T extends Schema>(schema: T) => {
  const queries = {} as Queries<T>;

  Object.keys(schema).forEach((key: keyof T) => {
    const result = schema[key];

    if (typeof result !== 'object') return;

    queries[key] = () => ({
      queryKey: [key],
      queryFn: result.fn,
    });
  });

  return queries;
};
