import type { AxiosResponse } from 'axios';
import axios from 'axios';

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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!token) {
    return {
      hasExpired: true,
      exp: 0,
    };
  }

  try {
    const res: AxiosResponse<ResType<TokenType>> = await axios.get(
      `${apiUrl}/auth/check`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const { data } = res;

    return {
      hasExpired: data.data.hasExpired,
      exp: data.data.exp,
    };
  } catch (error: unknown) {
    throw new Error('checkToken failed');
  }
};

export default checkToken;
