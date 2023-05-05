import type { NextPageWithLayout } from '@/types';
import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Header, Menu, TriggerTableModal } from './components';

const Order: NextPageWithLayout = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  // useEffect(() => {
  //   if (user.role !== 'waiter') {
  //     router.replace('/login');
  //   }
  // }, [user, router]);

  if (user.role !== 'waiter') {
    router.replace('/login');
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
