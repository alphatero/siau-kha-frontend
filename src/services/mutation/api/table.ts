import { TableStatus } from '@/types/order';
import { cookies } from '@/utils/cookies';
import axios from 'axios';

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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = cookies.get('user');

  const res = await axios.patch(
    `${apiUrl}/table/${id}`,
    {
      status: toStatus(status),
      customer_num: customerNum,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res;
};

export default patchTable;
