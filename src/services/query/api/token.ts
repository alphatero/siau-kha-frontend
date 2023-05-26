import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { cookies } from '@/utils/cookies';

type ResCheckType = {
  status: 'success' | 'error';
  message: string;
  data: {
    hasExpired: boolean;
    exp: number;
  }
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
    const res: ResCheckType = await axios.get(
      `${apiUrl}/auth/check`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const { data } = res;

    return {
      hasExpired: data.hasExpired,
      exp: data.exp,
    };
  } catch (error: unknown) {
    throw new Error('checkToken failed');
  }
};

export default checkToken;
