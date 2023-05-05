import type { AxiosError } from 'axios';
import axios from 'axios';
import type { User, ResType, ResDataType } from '@/types/User';

export const login = async (user: User):Promise<ResDataType> => {
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

    const name = data.data && data.data.user_name;
    const role = data.data && data.data.user_role;
    const token = data.data && data.data.token;
    return {
      status: 'success',
      user: {
        name,
        role,
        token,
      },
    };
  } catch (error:unknown) {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError<ResType>;
      if (err.response?.status === 401) {
        return {
          status: 'error',
          message: 'Login failed',
          user: '',
        };
      }
    }
    return {
      status: 'error',
      message: 'Login failed',
      user: '',
    };
  }
};

export default login;
