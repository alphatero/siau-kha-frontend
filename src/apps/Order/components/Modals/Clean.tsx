import clsx from 'clsx';
import { Modal, Button } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { usePatchTable } from '@/services/mutation';
import { TableStatus } from '@/types/order';
import { HttpStatusCode } from 'axios';
import { useStore } from '../../stores';

export const Clean = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { table } = useStore();

  const { mutateAsync } = usePatchTable();

  const handleCleanModal = async () => {
    const res = await mutateAsync({ id: table.id, status: TableStatus.IDLE, customerNum: 0 });

    if (res.status === HttpStatusCode.Ok) {
      setIsOpen(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex flex-col justify-center">
        <legend className='mx-auto mb-4 text-h4'>確定清潔完成</legend>
        <div className='w-full border-t border-black/10 pt-[50%] text-center'>
          <p className='text-fs-6'>按下清潔完成後，此桌訂單會被清空</p>
          <p className='text-fs-6'>請確認是否已完成結帳</p>
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
            onClick={handleCleanModal}
          >
            <span className='text-fs-6'>確定</span>
          </Button>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Clean;
