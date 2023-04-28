import { createMutations } from "@/utils/createMutations";
import * as api from '../api/login'

export const schema = {
  login: {
    fn: api.login
  }
} as const

export const mutations = createMutations(schema)