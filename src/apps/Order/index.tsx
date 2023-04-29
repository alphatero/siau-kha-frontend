import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';
import { Header, Menu } from './components';

const Order: NextPageWithLayout = () => (
    <div className={clsx('flex', 'mx-auto w-full')}>
      <Menu />
      <div className="flex-1 items-start">
        <Header />
      </div>
    </div>
);

export default Order;
