import clsx from 'clsx';
import Image from 'next/image';
import { Modal, Button, Loading } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { usePostOrder } from '@/services/mutation';
import { useStore } from '../../stores';
import { toProductDetail } from '../../utils/toProductDetail';

export const Check = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();
  const { orderList, table, setOrderList } = useStore();

  const { mutateAsync, isLoading } = usePostOrder();

  const handlePostOrder = async () => {
    const { orderId } = table;
    const productDetail = toProductDetail(orderList);
    const { status } = await mutateAsync({
      orderId,
      productDetail,
    });

    if (status === 'success') {
      setIsOpen(false);
      setOrderList([]);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      {isLoading && <Loading />}
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
            onClick={handlePostOrder}
          >
            <span className='text-fs-6'>送出訂單</span>
          </Button>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Check;
