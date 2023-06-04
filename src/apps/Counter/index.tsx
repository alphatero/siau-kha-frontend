import type { NextPageWithLayout } from '@/types';
import { Loading } from '@/components/common';
import clsx from 'clsx';
import { Modals } from './components/Modals';
import { Menu, Sidebar, Table } from './components';
import { useUpdateList } from './hooks/useUpdateList';

const Counter: NextPageWithLayout = () => {
  const { isLoading, list } = useUpdateList();

  return (
    <div className="flex w-full justify-between overflow-y-hidden">
      <Menu />
      <div className={clsx('col-span-2 grid flex-1 grid-cols-2 grid-rows-2', 'gap-6 px-6 pb-8 pt-14')}>
        {isLoading ? (
          <Loading />
        ) : (
          list.map((item) => (
            <Table
              title={item.name}
              isPayed={item.isPay}
              seat={item.seat}
              status={item.status}
              time={item.time}
              customerNum={item.customer}
              key={item.name}
            />
          ))
        )}
      </div>
      <Sidebar />
      <Modals />
    </div>
  );
};

export default Counter;
