import clsx from 'clsx';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { AlertType, ProductDetailStatus } from '@/types/kitchen';

dayjs.extend(duration);

type Props = {
  productName: string,
  note?: string[],
  status: string,
  alertType: AlertType,
  orderTime: string,
  quantity: number,
};

const getTimeDifference = (inputTime: string): string => {
  const now = dayjs();

  // Parse inputTime into a dayjs object with current date
  const hour = parseInt(inputTime.split(':')[0], 10);
  const minute = parseInt(inputTime.split(':')[1], 10);
  const timeObj = now.hour(hour).minute(minute);

  // Calculate the difference in milliseconds
  const diff = now.diff(timeObj);

  // Use the duration plugin to convert the difference into hours and minutes
  const durationObj = dayjs.duration(Math.abs(diff));

  // Format the duration as "HH:mm"
  const formattedDiff = `${durationObj.hours().toString().padStart(2, '0')}:${durationObj.minutes().toString().padStart(2, '0')}`;

  return formattedDiff;
};

export const Product = (props: Props) => {
  const {
    productName,
    note,
    status,
    alertType,
    orderTime,
    quantity,
  } = props;

  return (
    <div
    className={clsx(
      'rounded border px-3 py-2 ',
      {
        'border-warn': status === ProductDetailStatus.IN_PROGRESS && alertType === AlertType.HIGH,
        'border-black/10': !(status === ProductDetailStatus.IN_PROGRESS && alertType === AlertType.HIGH),
        'bg-black/10': status !== ProductDetailStatus.IN_PROGRESS,
      },
    )}>
      <div className='mb-1 flex items-center justify-between'>
        <div className='flex items-baseline space-x-1'>
          <h6 className="text-h6 text-black/85">{productName}</h6>
          <span className="text-fs-6 text-secondary/85">
            {Array.isArray(note) ? note.join(',') : ''}
          </span>
        </div>
        <span
          className={
            clsx(
              'text-fs-7 text-info',
              status === ProductDetailStatus.IN_PROGRESS ? {
                'text-warn': alertType === AlertType.HIGH,
                'text-primary': alertType === AlertType.MIDDLE,
                'text-secondary': alertType === AlertType.LOW,
              } : {},
              status !== ProductDetailStatus.IN_PROGRESS ? 'text-black/85' : 'text-info',
            )}>{getTimeDifference(orderTime)}</span>
      </div>
      <div className='mb-1 flex items-center justify-between'>
        <div className='flex items-center space-x-1'>
          <span className="text-fs-6 text-black/85">數量 : </span>
          <span className="text-fs-6 text-black/85">{quantity}</span>
        </div>
      </div>
      <button className={clsx(
        'w-full rounded-s py-1',
        status === ProductDetailStatus.IN_PROGRESS ? {
          'bg-warn': alertType === AlertType.HIGH,
          'bg-primary': alertType === AlertType.MIDDLE,
          'bg-secondary': alertType === AlertType.LOW,
        } : {},
        status !== ProductDetailStatus.IN_PROGRESS ? 'bg-black/25 text-black/85' : 'bg-primary text-white',
      )}
      >
        <span className="text-fs-6">{`${status === ProductDetailStatus.IN_PROGRESS ? '出菜' : '已完成'}`}</span>
      </button>
    </div>
  );
};

export default Product;
