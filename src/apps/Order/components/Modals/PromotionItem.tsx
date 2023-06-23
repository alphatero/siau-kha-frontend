import clsx from 'clsx';
import { PromotionType } from '@/types/order';
import { Radio } from 'flowbite-react';
import { useEffect } from 'react';
import { useStore } from '../../stores';

export const PromotionItem = (props: {
  item: PromotionType;
}) => {
  const { item } = props;
  const { selectedPromotionId, setSelectedPromotionId, currentPromotion } = useStore();

  const handleClick = (clickPromotionId: string) => {
    setSelectedPromotionId(clickPromotionId);
  };

  useEffect(() => {
    setSelectedPromotionId(currentPromotion?.id ?? '');
  }, [currentPromotion]);

  return (
    <label
      className={clsx(
        'flex items-start justify-around space-x-10 px-5 py-3',
        'cursor-pointer border-t border-black/10 last:border-y',
      )}
    >
      <div className='flex flex-1'>
        <Radio
          className='mt-1 h-4 w-4 checked:bg-primary'
          onChange={() => handleClick(item.id)}
          checked={selectedPromotionId === item.id}
        />
        <p className='mx-5'>{item.name}</p>
        <p className='ml-auto'>{item.discountType}</p>
      </div>
      <div className='flex-none'>
        {
          item.charge.discount ? (
            <p>折扣<span className='ml-2 text-secondary'>
              {item.charge.discountPrice}%
            </span></p>
          ) : (
            <p>折讓<span className='ml-2 text-secondary'>
              ${item.charge.allowancePrice}
            </span></p>
          )
        }
        <p className='whitespace-nowrap text-black/50'>{item.period.start}-{item.period.end}</p>
      </div>
    </label>
  );
};

export default PromotionItem;
