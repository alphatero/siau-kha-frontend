import { Auth, IconButton } from '@/components/common';
import clsx from 'clsx';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../stores';
import { checkPayStatus } from '../utils/checkPayStatus';

export const Sidebar = () => {
  const { setTriggerModal, list } = useStore();
  const { setIsOpen } = useModalStore();

  const handleBill = () => {
    setTriggerModal('selectTable');
    setIsOpen(true);
  };

  // 計算 list 中 isPayed 為 false 的數量
  const unpaidCount = list.filter((item) => checkPayStatus(item.orderId, item.status, item.isPay, item.orderDetail?.flat().length)).length;

  return (
  <div
    className={clsx(
      'h-screen bg-white px-4 py-6',
      ' border-l border-black/10',
      'flex flex-col justify-between',
    )}
  >
    <div className="relative">
      <span
        className={clsx(
          'absolute right-0 rounded-full bg-warn px-2',
          'text-fs-6 text-white',
          '-translate-y-2 translate-x-2',
        )}
      >
        {unpaidCount}
      </span>

      <IconButton containerClasses="w-12 text-primary" icon="bill" onClick={handleBill} />
    </div>

    <div className="flex flex-col items-center space-y-4">
      <Auth position="right" absolute='bottom'/>
      <IconButton containerClasses="w-10 text-primary" icon="settlement" />
    </div>
  </div>
  );
};

export default Sidebar;
