import type { AxiosResponse } from 'axios';
import { get } from '@/utils/axios';

export type ResType<T> = {
  status: 'success'
  message: string;
  data: T
}

type TokenType = {
  hasExpired: boolean;
  exp: number;
}

export const checkToken = async (token: string) => {
  if (!token) {
    return {
      hasExpired: true,
      exp: 0,
    };
  }

  const res: AxiosResponse<ResType<TokenType>> = await get('/auth/check');

  const { data } = res;

  return {
    hasExpired: data.data.hasExpired,
    exp: data.data.exp,
  };
};

export default checkToken;
