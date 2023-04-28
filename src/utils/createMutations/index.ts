import type { Schema, Mutations } from './type'

export type { Schema, Mutations }

export const createMutations = <T extends Schema>(schema: T) => {
  const mutations = {} as Mutations<typeof schema>

  for (const key in schema) {
    const result = schema[key]

    if (typeof result === 'object') {
      mutations[key] = () => ({
        mutationKey: [key],
        mutationFn: result.fn,
      })
    } else {
      //@ts-ignore
      mutations[key] = (arg: any) => ({
        mutationKey: [key, ...result(arg).key],
        mutationFn: result(arg).fn,
      })
    }
  }
  return mutations
}