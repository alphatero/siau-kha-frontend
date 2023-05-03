import { Modal } from '@/components/common';
import clsx from 'clsx';
import { TableTypes, TableStatus } from '@/types/order';
import { useStore } from '../stores';

const tableList:TableTypes[] = [
  {
    name: 'A1',
    status: TableStatus.MEAL,
    time: '00:00',
    unfinished: 3,
    seat: 4,
    customer: 3,
  },
  {
    name: 'A2',
    status: TableStatus.IDEL,
    time: '00:00',
  },
  {
    name: 'A3',
    status: TableStatus.MEAL,
    time: '00:00',
    unfinished: 3,
    seat: 4,
    customer: 3,
  },
];

export const TriggerTableModal = () => {
  const { isOpenTriggerTable, setIsOpenTriggerTable, setTable } = useStore();

  const onChangeTable = (table:TableTypes) => {
    setTable(table);
    setIsOpenTriggerTable(false);
  };

  return (
    <Modal isOpen={isOpenTriggerTable} onClose={() => setIsOpenTriggerTable(false)}>
      <div className="flex flex-col items-center justify-center">
        <h4 className={
          clsx(
            'w-full border-b border-black/10',
            'pb-4 text-center text-h4',
          )}>選擇桌次</h4>

        <ul className='flex w-full flex-col'>
          {
            tableList.map((table) => (
              <li key={table.name}>
                <button className={
                  clsx(
                    'flex w-full flex-col space-y-3 py-2',
                    'border-b border-black/10',
                    'hover:bg-highlight',
                  )}
                  onClick={() => onChangeTable(table)}
                >

                  <div className='flex w-full justify-between'>
                    <h4 className='text-h4'>Table {table.name}</h4>
                    <p className='text-h4'>{table.time}</p>
                  </div>
                  <div className='flex w-full justify-between'>
                    <div className={
                      clsx(
                        'rounded-md border border-secondary',
                        'px-2 py-1',
                        table.status === TableStatus.MEAL ? 'text-info' : 'text-secondary',
                      )}>
                      <p>
                        {table.status}
                        {
                          table.seat && (
                            <span className='pl-1 text-fs-6'>{ table.customer} /{table.seat}</span>)
                        }
                      </p>
                    </div>
                    {
                      table.unfinished && (
                        <p className='text-fs-6 text-warn'>未上菜：{table.unfinished}</p>)
                    }
                  </div>
                </button>
              </li>))
          }
        </ul>
      </div>
    </Modal>
  );
};

export default TriggerTableModal;
