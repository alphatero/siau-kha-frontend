import { Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';

export const TriggerPromotionModal = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="flex flex-col items-center justify-center">
        <h2>promotion modal</h2>
      </div>
    </Modal>
  );
};

export default TriggerPromotionModal;
