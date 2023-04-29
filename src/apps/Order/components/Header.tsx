import { Button } from '@/components/common';
import clsx from 'clsx';

export const Header = () => {
  return (
    <div
      className={clsx(
        'border border-black-50 flex justify-between',
        'py-3 px-6 w-full',
      )}
    >
      <div className="flex items-center space-x-2">
        <h2 className="text-black">Table A1</h2>

        <Button className="bg-black">
          <span className="text-white">清理桌面</span>
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Button color="primary" outline>
          優惠活動
        </Button>
        <Button color="primary">點餐紀錄</Button>
        <div className="w-[1px] h-6 bg-gray-400" />
        <Button color="secondary">清理完成</Button>
      </div>
    </div>
  );
};
