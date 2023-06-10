import { get } from '@/utils/axios';

export const signOut = async () => {
  const res = await get('/auth/sign-out');

  return res.data;
};

export default signOut;
