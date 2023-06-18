import clsx from 'clsx';
import { IconButton } from '@/components/common/IconButton';
import { useModalStore } from '@/stores/modal';
import { ModalCategory, OrderItemType } from '@/types/order';
import { useStore } from '../stores';

export const CheckSideItem = (props: OrderItemType) => {
  const {
    name, price, quantity, currentNote, idx,
  } = props;
  const { setIsOpen } = useModalStore();
  const {
    setTriggerModal, setOrderItem, setOrderList, orderList,
  } = useStore();

  const handleClick = (
    modalName: ModalCategory,
    memoItem: OrderItemType = props,
  ) => {
    setOrderItem(memoItem);
    setTriggerModal(modalName);
    setIsOpen(true);
  };

  const removeItem = (clickId: number) => {
    const filteredList = orderList.filter((item) => item.idx !== clickId);
    setOrderList(filteredList);
  };

  const handleMinus = (i: number) => {
    if (quantity === 1) return;

    const newList = orderList.map((item) => {
      if (item.idx === i) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setOrderList(newList);
  };

  const handlePlus = (i: number) => {
    const newList = orderList.map((item) => {
      if (item.idx === i) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setOrderList(newList);
  };

  return (
    <li
      className={clsx(
        'flex flex-col items-center space-y-2 px-4 py-3',
        'rounded border border-black/10',
      )}
    >
      <div className='flex w-full justify-between'>
        <div className='flex items-baseline space-x-1'>
          <h6 className="text-h6 text-black/85">{name}</h6>
          <span className="text-fs-6 text-secondary/85">
            {currentNote}
          </span>
        </div>
        <span className="text-fs-6 text-black">NT${price * quantity}</span>
      </div>
      <div className='flex w-full items-end justify-between'>
        <div className='flex items-center'>
          <IconButton
            containerClasses='h-8 w-8 rounded-full bg-black/85 p-2 text-white'
            icon='minus'
            onClick={() => handleMinus(idx)}
          />
          <span className='inline-block w-10 text-center text-black/85'>
            {quantity}
          </span>
          <IconButton
            containerClasses='h-8 w-8 rounded-full bg-black/85 p-2 text-white'
            icon='plus'
            onClick={() => handlePlus(idx)}
          />
        </div>
        <div className='space-x-8'>
          <IconButton
            containerClasses='text-black/50'
            iconClasses='h-6'
            icon='edit'
            onClick={() => handleClick('memo')}
          />
          <IconButton
            containerClasses='text-secondary/85'
            iconClasses='h-6'
            icon='delete'
            onClick={() => removeItem(idx)}
          />
        </div>
      </div>
    </li>
  );
};

export default CheckSideItem;
