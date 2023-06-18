import { get } from '@/utils/axios';

export const getCheckoutList = async (id: string) => {
  const res = await get(`/check-out/${id}`);

  return res.data;
};

export default getCheckoutList;
