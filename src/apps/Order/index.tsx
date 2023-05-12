import type { NextPageWithLayout } from '@/types';
import { Loading } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import {
  Header, Menu, Main,
  TriggerTableModal, TriggerPromotionModal, TriggerLogModal, TriggerMemoModal, TriggerCheckModal,
} from './components';
import { useUpdateList } from './hooks/useUpdateList';

const Order: NextPageWithLayout = () => {
  const { isLoading } = useUpdateList();
  const { isOpen, triggerModal } = useModalStore();

  const getCurrentTriggerModal = (openModal: ModalCategory) => {
    switch (openModal) {
      case 'promotion':
        return <TriggerPromotionModal />;
      case 'log':
        return <TriggerLogModal />;
      case 'memo':
        return <TriggerMemoModal />;
      case 'check':
        return <TriggerCheckModal />;
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

      <TriggerTableModal />
    </>
  );
};

export default Order;
