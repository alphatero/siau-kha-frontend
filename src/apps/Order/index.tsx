import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';
import { Header, Menu, Main } from './components';

const Order: NextPageWithLayout = () => (
  <div className={clsx('flex', 'mx-auto w-full')}>
    <Menu />
    <div className="flex-1 items-start">
      <Header />
      <Main />
    </div>
  </div>
);

export default Order;
