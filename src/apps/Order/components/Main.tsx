import { SearchLabel } from '@/components/common';
import clsx from 'clsx';
import { CheckSide } from './CheckSide';

export const Main = () => (
  <div className={clsx(
    'flex flex-row',
    'h-full space-x-6 bg-highlight pl-6 pr-8',
  )}>
    <main className='flex-1'>
      <div className={clsx(
        'flex flex-row items-end',
        'mb-4 space-x-2 pt-8',
        'text-primary',
      )}>
        <h2 className="text-h4">套餐</h2>
        <p className="text-fs-6">餐點列表</p>
      </div>
      <SearchLabel placeholder='餐點名稱' />
    </main>
    <div className='w-[384px] flex-none py-3'>
      <CheckSide />
    </div>
  </div>
);

export default Main;
