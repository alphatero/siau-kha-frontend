import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { cookies } from '@/utils/cookies';
import { ResStandbyType, ResType, StandbyType } from '@/types/seat';

const toReservation = (data: ResStandbyType): StandbyType => ({
  name: data.name,
  phone: data.phone,
  customerNum: data.customer_num,
});

export const getReservation = async (): Promise< {list: StandbyType[] }> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = cookies.get('user');

  try {
    const res: AxiosResponse<ResType<{reservation_list: ResStandbyType[]}>> = await axios.get(
      `${apiUrl}/reservation`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const { data } = res;

    const list: StandbyType[] = data.data.reservation_list.map((item: ResStandbyType) => toReservation(item));

    return {
      list,
    };
  } catch (error: unknown) {
    throw new Error('Failed to get reservation');
  }
};

export default getReservation;
