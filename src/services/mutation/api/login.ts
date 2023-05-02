import type { AxiosError } from 'axios';
import axios from 'axios';
import type { User, ResType } from '@/types/User';

export const login = async (user: User) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await axios.post<ResType>(
      `${apiUrl}/auth/sign-in`,
      {
        user_account: user.username,
        user_mima: user.password,
      },
    );
    const { data } = res;
    return data;
  } catch (error:unknown) {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError<ResType>;
      if (err.response?.status === 401) {
        return {
          status: 'error',
          message: 'Login failed',
          data: '',
        };
      }
    }
    return {
      status: 'error',
      message: 'Login failed',
      data: '',
    };
  }
};

export default login;
