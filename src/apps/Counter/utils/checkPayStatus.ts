import { TableStatus } from '@/types/order';

export const checkPayStatus = (orderId: string, status: string, isPay: boolean, orderDetailLen: number | undefined) => {
  if (orderId === '') return true;
  return status && TableStatus.MEAL && !isPay && orderDetailLen && orderDetailLen > 0;
};

export default checkPayStatus;
