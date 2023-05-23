import { Button, Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { useStore } from '../../stores';
import { PromotionItem } from './PromotionItem';

export const Promotion = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { setTriggerModal, promotionList } = useStore();

  const openModal = (modalName: ModalCategory) => {
    setTriggerModal(modalName);
    setIsOpen(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex flex-col justify-around">
        <legend className='mx-auto mb-4 text-h4'>優惠活動</legend>
        <div className='text-fs-6 text-black/85'>
          {
            promotionList.map((item) => (
              <PromotionItem key={item.id} item={item} />
            ))
          }
        </div>
        <div className='absolute inset-x-0 bottom-0 mb-6 px-6'>
          <Button
            className='w-full py-2'
            color='primary'
            onClick={() => openModal('check')}
          >
            <span className='text-h5'>送出訂單</span>
          </Button>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Promotion;
