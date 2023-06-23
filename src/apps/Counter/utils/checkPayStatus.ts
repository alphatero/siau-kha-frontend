import { TableStatus } from '@/types/order';

export const checkPayStatus = (status: string, isPay: boolean, orderDetailLen: number | undefined) => status && TableStatus.MEAL && !isPay && orderDetailLen && orderDetailLen > 0;

export default checkPayStatus;
