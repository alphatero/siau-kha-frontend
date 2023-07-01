import { TableStatus } from '@/types/order';

// 需結帳
export const checkPayStatus = (orderId: string, status: string, isPay: boolean, orderDetailLen: number | undefined) => {
  if (orderId === '') return false; // 閒置
  return status === TableStatus.MEAL && !isPay && orderDetailLen && orderDetailLen > 0; // 用餐中、未結帳、已點餐
};

export default checkPayStatus;
