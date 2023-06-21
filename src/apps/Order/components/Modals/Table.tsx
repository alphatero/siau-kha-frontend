import { Modal } from '@/components/common';
import clsx from 'clsx';
import { TableType, TableStatus } from '@/types/order';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';

export const Table = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const {
    setTable, list,
  } = useStore();

  const onChangeTable = (table: TableType) => {
    setTable(table);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="flex flex-col items-center justify-center">
        <h4
          className={clsx(
            'w-full border-b border-black/10',
            'pb-4 text-center text-h4',
          )}
        >
          選擇桌次
        </h4>

        <ul className="flex w-full flex-col">
          {list?.map((table) => (
            <li key={table.name}>
              <button
                className={clsx(
                  'flex w-full flex-col space-y-3',
                  'border-b border-black/10 px-4 py-2',
                  table.status === TableStatus.MEAL && 'hover:bg-highlight',
                )}
                onClick={() => onChangeTable(table)}
                disabled={table.status === TableStatus.IDLE}
              >
                <div className="flex w-full justify-between text-black/85">
                  <h4 className={clsx(
                    'text-h4',
                    table.status === TableStatus.IDLE && 'text-black/50',
                  )}>Table {table.name}</h4>
                  <p className="text-h4">{table.time}</p>
                </div>
                <div className="flex w-full justify-between">
                  <div
                    className={clsx(
                      'rounded-md border',
                      'px-2 py-1',
                      table.status === TableStatus.MEAL
                        ? 'border-info text-info'
                        : 'border-black/50 text-black/50',
                    )}
                  >
                    <p>
                      {table.status}
                      {table.customer && (
                        <span className="pl-1 text-fs-6">
                          {table.customer} /{table.seat}
                        </span>
                      )}
                    </p>
                  </div>
                  {table.unfinished && (
                    <p className="text-fs-6 text-warn">
                      未上菜：{table.unfinished}
                    </p>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Table;
