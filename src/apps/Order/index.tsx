import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';

const Order: NextPageWithLayout = () => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'max-w-3xl mx-auto',
      )}
    >
      <h1>Order</h1>
    </div>
  );
};

export default Order;
