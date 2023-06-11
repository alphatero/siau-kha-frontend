import type { AxiosError } from 'axios';
import { request } from '@/utils/axios';
import type { User, ResType, ResDataType } from '@/types/user';
import { Role } from '@/types/user';

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

export const login = async (user: User):Promise<ResDataType> => {
  try {
    const res = await request.post(
      '/auth/sign-in',
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
    if (error instanceof Error) {
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
