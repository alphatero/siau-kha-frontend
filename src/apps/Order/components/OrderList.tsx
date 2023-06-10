import { Spinner } from 'flowbite-react';
import { Button } from '@/components/common';
import { IconButton } from '@/components/common/IconButton';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { useStore } from '../stores';
import { CheckSideItem } from './OrderItem';

export const CheckSide = () => {
  const { setIsOpen } = useModalStore();
  const { setTriggerModal, orderList, clickMenuItemTimes } = useStore();

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
            orderList.length === 0 ? (
                           <li className='rounded border border-black/10 px-4 py-3 text-center'>
                <h2>尚未點餐</h2>
              </li>
            ) : (

              orderList.map((item, i) => (
                <CheckSideItem
                  key={i}
                  idx={item.idx}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  tags={item.tags}
                  quantity={item.quantity}
                  note={item.note}
                  currentNote={item.currentNote}
                />
              ))
            )
          }
          { clickMenuItemTimes > 0
            && <li className='rounded border border-black/10 px-4 py-3 text-center'>
              <Spinner />
            </li>
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
