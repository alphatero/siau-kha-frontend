import { useState } from 'react';
import clsx from 'clsx';
import { PromotionType } from '@/types/order';
import { Checkbox } from 'flowbite-react';

export const PromotionItem = (props: {
  item: PromotionType;
}) => {
  const { item } = props;
  const [checked, setChecked] = useState(false);
  const handleClick = (clickId: number) => {
    setChecked(!checked);
    console.log(clickId);
  };

  return (
    <li
      className={clsx(
        'flex items-start justify-around space-x-10 px-5 py-3',
        'cursor-pointer border-t border-black/10 last:border-y',
      )}
      onClick={() => handleClick(item.id)}
    >
      <Checkbox
        className='mt-1 h-4 w-4 checked:bg-primary'
        checked={checked}
      />
      <div className='flex space-x-5'>
        <p>{item.name}</p>
        <p>{item.discountType}</p>
      </div>
      <div>
        {
          item.charge.discount ? (
            <p>折扣<span className='ml-2 text-secondary'>
              {item.charge.discountPrice}折
            </span></p>
          ) : (
            <p>折讓<span className='ml-2 text-secondary'>
              ${item.charge.allowancePrice}
            </span></p>
          )
        }
        <p className='text-black/50'>{item.period.start}-{item.period.end}</p>
      </div>
    </li>
  );
};

export default PromotionItem;