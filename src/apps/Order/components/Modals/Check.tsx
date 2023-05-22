import clsx from 'clsx';
import Image from 'next/image';
import { Modal, Button } from '@/components/common';
import { useModalStore } from '@/stores/modal';

export const Check = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex flex-col justify-center">
        <legend className='mx-auto mb-4 text-h4'>確定送出訂單</legend>
        <div className='relative h-[250px] w-full border-t border-black/10'>
          <Image
            src='/images/order-check-bg.png'
            alt='Order Check'
            fill={true}
            className='mt-10 object-contain'
          />
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
            <span className='text-fs-6'>送出訂單</span>
          </Button>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Check;
