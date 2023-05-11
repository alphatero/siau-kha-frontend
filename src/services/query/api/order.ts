import type { AxiosResponse } from 'axios';
import axios from 'axios';
import {
  TableStatus, TableTypes, ResDataType, ResType, ResTableType,
} from '@/types/order';

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

const toTable = (data: ResTableType) => ({
  id: data.id,
  time: data.create_time ?? '',
  customer: data.customer_num ?? 0,
  isPay: data.is_pay ?? false,
  seat: data.seat_max ?? 0,
  status: toTableStatus(data.status),
  name: data.table_name,
});

export const fetchTable = async (): Promise<ResDataType> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { token } = JSON.parse(localStorage.getItem('auth-storage') ?? '').state;

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
