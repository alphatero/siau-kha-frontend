import { TableStatus } from '@/types/order';
import { patch } from '@/utils/axios';

const toStatus = (status: TableStatus) => {
  switch (status) {
    case TableStatus.IDLE:
      return 'IDLE';
    case TableStatus.MEAL:
      return 'MEAL';
    default:
      return 'IDLE';
  }
};

type ResDataType = {
  id: string;
  status: TableStatus;
  customerNum: number;
}

export const patchTable = async (resData: ResDataType) => {
  const { id, status, customerNum } = resData;

  const res = await patch(`/table/${id}`, {
    status: toStatus(status),
    customer_num: customerNum,
  });

  if (res.status === 200) {
    return {
      status: 'success',
    };
  }

  return {
    status: 'error',
  };
};

export default patchTable;
