import type { NextPageWithLayout } from '@/types';
import { Loading } from '@/components/common';
import { Header, Menu, TriggerTableModal } from './components';
import { useUpdateList } from './hooks/useUpdateList';

const Order: NextPageWithLayout = () => {
  const { isLoading } = useUpdateList();

  if (isLoading) {
    return <Loading />;
  }

  return (
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
};

export default Order;
