import type { NextPageWithLayout } from '@/types';
import {
  Header, Menu, Main, TriggerTableModal,
} from './components';

const Order: NextPageWithLayout = () => (
  <>
    <Menu />
    <div className="flex flex-1 flex-col">
      <Header />
      <Main />
    </div>

    <TriggerTableModal />
  </>
);

export default Order;
