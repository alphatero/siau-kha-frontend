import clsx from 'clsx';
import { TableTab } from './TableTab';
import { TableOrder } from './TableOrder';

export const Main = () => {
  // TODO test data
  const list = [
    {
      id: '644e543b893f163f3a3678f6',
      table_name: 'TA 1',
      seat_max: 4,
      status: 'MEAL',
      customer_num: 3,
      create_time: '2023-04-30T16:00:00.000Z',
      is_pay: false,
      order_id: '644e5571020c9409fe694db5',
      isShow: true,
    },
    {
      id: '644e54a6893f163f3a3678f8',
      table_name: 'TA 2',
      seat_max: 4,
      status: 'MEAL',
      customer_num: 2,
      create_time: '2023-05-22T14:53:02.649Z',
      is_pay: false,
      order_id: '646b81cea4ea5e1bc53f7d8b',
      isShow: true,
    },
    {
      id: '644e54a8893f163f3a3678fa',
      table_name: 'TA 3',
      seat_max: 4,
      status: 'IDLE',
      order_id: '',
      isShow: true,
    },
    {
      id: '644e54ac893f163f3a3678fc',
      table_name: 'TA 4',
      seat_max: 6,
      status: 'IDLE',
      order_id: '',
      isShow: false,
    },
    {
      id: '644e54ac893f163f3a3678fd',
      table_name: 'TA 5',
      seat_max: 6,
      status: 'IDLE',
      order_id: '',
      isShow: false,
    },
  ];

  return (<div className='px-8'>
      <main>
          <ul className="my-10 flex items-center border-b border-primary">
            {list?.map((table) => (
              <li key={table.id}>
                <TableTab tableName={table.table_name} isShow={table.isShow}/>
              </li>
            ))}
          </ul>
          <div className={clsx(
            'grid flex-1 gap-4',
            'col-span-3 grid-cols-3 grid-rows-1',
          )}>
            {
              list?.filter((table) => table.isShow).map((table) => (
                <TableOrder tableName={table.table_name} key={table.id} />
              ))
            }
          </div>
      </main>
  </div>);
};

export default Main;
