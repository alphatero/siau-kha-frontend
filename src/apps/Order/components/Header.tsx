import { Button, Icons } from '@/components/common';
import clsx from 'clsx';
import { useStore } from '../stores';

export const Header = () => {
  const { table } = useStore();

  return (
    <div
      className={clsx(
        'border border-black-50 flex justify-between',
        'py-3 px-6 w-full',
      )}
    >
      <div className="flex items-center space-x-2">
        <h2 className="text-black">Table {table.name}</h2>

        <span className="text-h5 text-warn">{table.time}</span>

        <Button color="black" className="w-9 h-9 rounded-lg p-1" icon>
          <Icons.Change />
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Button color="primary" outline>
          優惠活動
        </Button>
        <Button color="primary">點餐紀錄</Button>
        <div className="w-[1px] h-6 bg-gray-400" />
        <Button color="secondary" className="flex whitespace-nowrap">
          <span className="w-6">
            <Icons.Notification />
          </span>
          <span>清理完成</span>
        </Button>
      </div>
    </div>
  );
};
