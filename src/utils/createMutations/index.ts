import type { Schema, Mutations } from './type';

export type { Schema, Mutations };

// 將 schema 轉換成 mutations 物件，但因為 schema 的型別是 const，所以這裡要用 as const，固定型別為物件，其他型別會報錯。
export const createMutations = <T extends Schema>(schema: T) => {
  const mutations = {} as Mutations<T>;

  Object.keys(schema).forEach((key: keyof T) => {
    const result = schema[key];

    if (typeof result !== 'object') return;

    mutations[key] = () => ({
      mutationKey: [key],
      mutationFn: result.fn,
    });
  });

  return mutations;
};
