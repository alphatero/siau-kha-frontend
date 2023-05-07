import type { NextPageWithLayout } from '@/types';
import { useTable } from '@/services/query';
import { useEffect } from 'react';
import { Header, Menu, TriggerTableModal } from './components';
import { useStore } from './stores';

const Order: NextPageWithLayout = () => {
  const { setList } = useStore();
  const { data, isLoading } = useTable();

  useEffect(() => {
    if (data) {
      setList(data.list);
    }
  }, [data, setList]);

  if (isLoading) {
    return <div>Loading...</div>;
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
