import type { AxiosResponse } from 'axios';
import { ResStandbyType, ResType, StandbyType } from '@/types/seat';
import { get } from '@/utils/axios';

const toReservation = (data: ResStandbyType): StandbyType => ({
  name: data.name,
  phone: data.phone,
  customerNum: data.customer_num,
});

export const getReservation = async (): Promise<{ list: StandbyType[] }> => {
  const res:AxiosResponse<ResType<{reservation_list: ResStandbyType[]}>> = await get('/reservation');

  const list: StandbyType[] = res.data.data.reservation_list.map((item: ResStandbyType) => toReservation(item));

  return {
    list,
  };
};

export default getReservation;
