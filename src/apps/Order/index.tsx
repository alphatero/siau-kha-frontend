import type { NextPageWithLayout } from '@/types';
import { Header, Menu, TriggerTableModal } from './components';

const Order: NextPageWithLayout = () => (
    <>
      <div className="mx-auto flex w-full">
        <Menu />
        <div className="flex-1 items-start">
          <Header />
        </div>
      </div>

      <TriggerTableModal />
    </>
);

export default Order;
