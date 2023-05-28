import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { cookies } from '@/utils/cookies';

export const signOut = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = cookies.get('user');

  try {
    const res: AxiosResponse = await axios.get(
      `${apiUrl}/auth/sign-out`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const { data } = res;

    return {
      status: data.status,
    };
  } catch (error: unknown) {
    throw new Error('signOut failed');
  }
};

export default signOut;
