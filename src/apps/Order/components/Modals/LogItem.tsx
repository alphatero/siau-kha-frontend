import clsx from 'clsx';
import { ModalLogItem } from '@/types/order';
import { LogButtons } from './LogButtons';

export const LogItem = (props: ModalLogItem) => {
  const {
    name, price, quantity, button,
  } = props;

  return (
    <li className='mb-2 flex items-center justify-between'>
      <p>{name}</p>
      <div className='ml-auto flex justify-end whitespace-nowrap'>
        <span>${price}</span>
        <div className='pl-2'>
          <span>x {quantity}</span>
          <span className='px-2'>=</span>
          <span className={clsx(
            'px-1',
            'rounded-md border border-secondary text-secondary',
          )}>$ {price * quantity}</span>
        </div>
      </div>
      <div className='ml-4 shrink-0 grow-0 basis-[130px]'>
        <LogButtons
          isCooking={button.isCooking}
          hasServed={button.hasServed}
        />
      </div>
    </li>
  );
};

export default LogItem;
