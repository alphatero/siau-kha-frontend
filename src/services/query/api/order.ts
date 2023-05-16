import type { AxiosResponse } from 'axios';
import axios from 'axios';
import {
  TableStatus, TableTypes, ResDataType, ResType, ResTableType,
} from '@/types/order';
import dayjs from 'dayjs';
import { cookies } from '@/utils/cookies';

const toTableStatus = (status: string): TableStatus => {
  switch (status) {
    case 'IDEL':
      return TableStatus.IDEL;
    case 'MEAL':
      return TableStatus.MEAL;
    default:
      return TableStatus.IDEL;
  }
};

// calculate diff time by minute
const calculateTime = (time: string): string => {
  const now = dayjs();
  const createTime = dayjs(time);
  const duration = now.diff(createTime, 'second');
  // change to mm:ss
  const minute = Math.floor(duration / 60);
  const second = duration % 60;
  return `${minute}:${second}`;
};

const toTable = (data: ResTableType) => ({
  id: data.id,
  time: data.create_time ? calculateTime(data.create_time) : '',
  customer: data.customer_num ?? 0,
  isPay: data.is_pay ?? false,
  seat: data.seat_max ?? 0,
  status: toTableStatus(data.status),
  name: data.table_name,
});

export const fetchTable = async (): Promise<ResDataType> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = cookies.get('user');

  try {
    const res: AxiosResponse<ResType> = await axios.get(
      `${apiUrl}/table/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const { data } = res;
    const tables = data.data.table_list ?? [];

    const list: TableTypes[] = tables.map((table) => toTable(table));

    return {
      list,
    };
  } catch (error:unknown) {
    throw new Error('fetchTable failed');
  }
};

export default fetchTable;
