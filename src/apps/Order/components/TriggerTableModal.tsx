import { Modal } from '@/components/common';
import clsx from 'clsx';
import { useStore } from '../stores';

type TableTypes = {
  title: string;
  status: '用餐中' | '閒置';
  time: string;
  unfinished?: number;
};

const tableList:TableTypes[] = [
  {
    title: 'A1',
    status: '用餐中',
    time: '00:00',
    unfinished: 3,
  },
  {
    title: 'A2',
    status: '閒置',
    time: '00:00',
  },
  {
    title: 'A3',
    status: '用餐中',
    time: '00:00',
    unfinished: 3,
  },
];

export const TriggerTableModal = () => {
  const { isOpenTriggerTable, setIsOpenTriggerTable } = useStore();

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
              <li key={table.title}>
                <button className={
                  clsx(
                    'flex w-full flex-col space-y-3 py-2',
                    'border-b border-black/10',
                    'hover:bg-color_bg',
                  )}>

                  <div className='flex w-full justify-between'>
                    <h4 className='text-h4'>Table {table.title}</h4>
                    <p className='text-h4'>{table.time}</p>
                  </div>
                  <div className='flex w-full justify-between'>
                    <div className=''>{ table.status}</div>
                    {
                      table.unfinished && (
                        <p className='text-h4 text-warn'>未上菜：{table.unfinished}</p>)
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
