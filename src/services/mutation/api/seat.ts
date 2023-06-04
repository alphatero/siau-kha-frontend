import axios from 'axios';
import { cookies } from '@/utils/cookies';
import { StandbyType } from '@/types/seat';

export const postReservation = async (data: StandbyType) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = cookies.get('user');

  const res = await axios.post(
    `${apiUrl}/reservation`,
    {
      name: data.name,
      phone: data.phone,
      customer_num: Number(data.customerNum),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res;
};

export default postReservation;
