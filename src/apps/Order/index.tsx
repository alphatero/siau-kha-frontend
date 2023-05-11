import type { NextPageWithLayout } from '@/types';
import { Loading } from '@/components/common';
import {
  Header, Menu, Main, TriggerTableModal,
} from './components';
import { useUpdateList } from './hooks/useUpdateList';

const Order: NextPageWithLayout = () => {
  const { isLoading } = useUpdateList();

  if (isLoading) {
    return <Loading />;
  }

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
