import { StandbyType } from '@/types/seat';
import { post } from '@/utils/axios';

export const postReservation = async (data: StandbyType) => {
  const res = await post('/reservation', {
    name: data.name,
    phone: data.phone,
    customer_num: Number(data.customerNum),
  });

  return res;
};

export default postReservation;
