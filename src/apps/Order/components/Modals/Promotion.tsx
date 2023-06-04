import clsx from 'clsx';
import { Button, Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';
import { PromotionItem } from './PromotionItem';

export const Promotion = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { promotionList } = useStore();

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
        <div className={clsx(
          'absolute inset-x-0 bottom-0',
          'mb-6 flex space-x-6 px-6',
        )}>
          <Button
            className={clsx(
              'w-full py-2',
              'border-black/50 text-black/50',
              'hover:border-transparent hover:bg-black/50',
            )}
            color='black'
            outline
            onClick={() => setIsOpen(false)}
          >
            <span className='text-fs-6'>取消</span>
          </Button>
          <Button
            className='w-full py-2'
            color='primary'
          >
            <span className='text-fs-6'>確認</span>
          </Button>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Promotion;
