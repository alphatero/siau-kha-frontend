import type { AxiosError } from 'axios'
import axios from 'axios'
import type { User, ResType } from '@/types/User'

export const login = async (user: User) => {
  const jwt = process.env.JWT_SECRET

  try {

    const res = await axios.post<ResType>(
      `api/mocks/login`,
      user,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    const data = res.data
    return data
  } catch (error:unknown) {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError<ResType>
      if (err.response?.status === 401) {
        return {
          status: "error",
          message: "Login failed",
          data: ""
        }
      }
    }
    return {
      status: "error",
      message: "Login failed",
      data: ""
    }
  }
}
