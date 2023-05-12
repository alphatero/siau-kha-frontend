import { Button } from '@/components/common';
import { IconButton } from '@/components/common/IconButton';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { CheckSideItem } from './CheckSideItem';
import { Constants } from '../constants';

export const CheckSide = () => {
  const { setIsOpen, setTriggerModal } = useModalStore();

  const openModal = (modalName: ModalCategory) => {
    setTriggerModal(modalName);
    setIsOpen(true);
  };

  return (
    <div className='w-[384px] flex-none py-3'>
      <div className="flex h-full w-full flex-col bg-white px-4 py-6">
        <h2 className="text-h4 text-primary">點餐紀錄</h2>
        <ul className='mt-4 space-y-3'>
          {
            Constants.OrderList.map((order, i) => (
              <CheckSideItem
                key={i}
                name={order.name}
                price={order.price}
                quantity={order.quantity}
                note={order.note}
              />
            ))
          }
        </ul>
        <hr className='my-4 bg-black/25' />
        <h2 className="mb-5 text-h4 text-primary">優惠活動</h2>
        <div className='flex w-full justify-between pr-2'>
          <div className='flex items-baseline space-x-1'>
            <h6 className="text-h6 text-black/85">生日優惠</h6>
            <p className="text-fs-6 text-black/85">
              折扣
              <span className="text-secondary/85">88 折</span>
            </p>
          </div>
          <IconButton
            containerClasses='text-secondary/85'
            iconClasses='h-6'
            icon='delete'
          />
        </div>
        <Button
          className='mt-auto w-full py-2'
          color='primary'
          onClick={() => openModal('check')}
        >
          <span className='text-h5'>送出訂單</span>
        </Button>
      </div>
    </div>
  );
};

export default CheckSide;
