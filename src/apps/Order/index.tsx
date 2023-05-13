import type { NextPageWithLayout } from '@/types';
import { Loading } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { useStore } from './stores';
import {
  Header, Menu, Main, Modals,
} from './components';
import { useUpdateList } from './hooks/useUpdateList';

const Order: NextPageWithLayout = () => {
  const { isLoading } = useUpdateList();
  const { isOpen } = useModalStore();
  const { triggerModal } = useStore();

  const getCurrentTriggerModal = (openModal: ModalCategory) => {
    switch (openModal) {
      case 'table':
        return <Modals.Table />;
      case 'promotion':
        return <Modals.Promotion />;
      case 'log':
        return <Modals.Log />;
      case 'memo':
        return <Modals.Memo />;
      case 'check':
        return <Modals.Check />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Menu />
      <div className="flex flex-1 flex-col">
        <Header />
        <Main />
      </div>

      {isOpen && getCurrentTriggerModal(triggerModal)}
    </>
  );
};

export default Order;
