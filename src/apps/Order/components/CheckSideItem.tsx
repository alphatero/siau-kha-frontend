import clsx from 'clsx';
import { Icons } from '@/components/common';

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
          <button className='h-8 w-8 rounded-full bg-black/85 p-2 text-white'>
            <Icons.Minus />
          </button>
          <span className='inline-block w-10 text-center text-black/85'>
            {quantity}
          </span>
          <button className='h-8 w-8 rounded-full bg-black/85 p-2 text-white'>
            <Icons.Plus />
          </button>
        </div>
        <div className='space-x-8'>
          <button className='text-black/50'>
            <Icons.Pencil className='h-6' />
          </button>
          <button className='text-secondary/85'>
            <Icons.TrashCan className='h-6' />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CheckSideItem;
