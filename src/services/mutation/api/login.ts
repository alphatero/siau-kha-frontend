import type { AxiosError } from 'axios';
import axios from 'axios';
import type { User, ResType, ResDataType } from '@/types/user';
import { Role } from '@/types/user';
import { cookies } from '@/utils/cookies';

const toRole = (role: string): Role | '' => {
  switch (role) {
    case 'admin':
      return Role.admin;
    case 'waiter':
      return Role.waiter;
    case 'kitchen':
      return Role.kitchen;
    case 'manager':
      return Role.manager;
    case 'counter':
      return Role.counter;
    default:
      return '';
  }
};

type ResCheckType = {
  status: 'success' | 'error';
  message: string;
  data: {
    hasExpired: boolean;
    exp: number;
  }
}

export const checkToken = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { token } = cookies.get('user');

  try {
    const res: ResCheckType = await axios.post(
      `${apiUrl}/auth/check`,
      {
        token,
      },
    );

    const { data } = res;

    if (!data.hasExpired) {
      cookies.remove('user');
    }
  } catch (error: unknown) {
    throw new Error('checkToken failed');
  }
};

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
    const role = data.data && toRole(data.data.user_role);
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
