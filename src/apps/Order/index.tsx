import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';
import { Header, Menu } from './components';

const Order: NextPageWithLayout = () => {
  return (
    <div className={clsx('flex', 'w-full mx-auto')}>
      <Menu />
      <div className="flex-1 items-start">
        <Header />
      </div>
    </div>
  );
};

export default Order;
