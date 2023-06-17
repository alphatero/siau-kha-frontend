import { MealStandbyType, StandbyType } from '@/types/seat';
import { deleteApi, patch, post } from '@/utils/axios';

export const postReservation = async (data: StandbyType) => {
  const res = await post('/reservation', {
    name: data.name,
    phone: data.phone,
    customer_num: Number(data.customerNum),
  });

  return {
    status: 'success',
  };
};

export const patchReservation = async (data: MealStandbyType) => {
  await patch(`/reservation/${data.id}/${data.tableId}/${data.customerNum}`, {});

  return {
    status: 'success',
  };
};

export const deleteReservation = async (id: string) => {
  await deleteApi(`/reservation/${id}`);

  return {
    status: 'success',
  };
};

export default postReservation;
