import { Button, Icons } from '@/components/common';
import clsx from 'clsx';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { useStore } from '../stores';

export const Header = () => {
  const { setTriggerModal, table } = useStore();
  const { setIsOpen } = useModalStore();

  const openModal = (modalName: ModalCategory) => {
    setTriggerModal(modalName);
    setIsOpen(true);
  };

  return (
    <div
      className={clsx(
        'flex justify-between border border-gray-200 bg-white',
        'w-full px-6 py-2',
      )}
    >
      <div className="flex items-center space-x-2">
        <h2 className="text-black">Table {table.name}</h2>

        <span className="text-h5 text-warn">{table.time}</span>

        <Button color="black" className="h-10 w-10 rounded-lg p-1" icon onClick={() => openModal('table')}>
          <Icons.Change />
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Button color="primary" outline onClick={() => openModal('promotion')}>
          優惠活動
        </Button>
        <Button color="primary" onClick={() => openModal('log')}>
          點餐紀錄
        </Button>
        <div className="h-6 w-[1px] bg-gray-400" />
        <Button color="secondary" className="flex whitespace-nowrap">
          <span className="w-6">
            <Icons.Notification />
          </span>
          <span>清理完成</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
