import clsx from 'clsx';
import { IconButton } from '@/components/common/IconButton';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { useStore } from '../stores';

type PropsType = {
  name: string;
  price: number;
  quantity: number;
  note?: string;
}

export const CheckSideItem = (props: PropsType) => {
  const {
    name, price, quantity, note,
  } = props;

  const { setIsOpen } = useModalStore();
  const { setTriggerModal } = useStore();

  const openModal = (modalName: ModalCategory, memoItem: string) => {
    console.log('memoItem', memoItem);
    setTriggerModal(modalName);
    setIsOpen(true);
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
          { !!note && <span className="text-fs-6 text-secondary/85">{note}</span> }
        </div>
        <span className="text-fs-6 text-black">NT${price}</span>
      </div>
      <div className='flex w-full items-end justify-between'>
        <div className='flex items-center'>
          <IconButton
            containerClasses='h-8 w-8 rounded-full bg-black/85 p-2 text-white'
            icon='minus'
          />
          <span className='inline-block w-10 text-center text-black/85'>
            {quantity}
          </span>
          <IconButton
            containerClasses='h-8 w-8 rounded-full bg-black/85 p-2 text-white'
            icon='plus'
          />
        </div>
        <div className='space-x-8'>
          <IconButton
            containerClasses='text-black/50'
            iconClasses='h-6'
            icon='edit'
            onClick={() => openModal('memo', name)}
          />
          <IconButton
            containerClasses='text-secondary/85'
            iconClasses='h-6'
            icon='delete'
          />
        </div>
      </div>
    </li>
  );
};

export default CheckSideItem;
