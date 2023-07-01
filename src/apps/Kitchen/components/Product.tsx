import clsx from 'clsx';
import { AlertType, ProductDetailStatus } from '@/types/kitchen';
import { usePatchOrderItemFinish } from '@/services/mutation';
import { Loading } from '@/components/common';
import { useUpdateTables } from '../hooks/useUpdateTable';
import { getTimeDifference } from '../utils/getTimeDifference';

type Props = {
  orderId: string,
  orderDetailId: string,
  productId: string,
  productName: string,
  note?: string[],
  status: string,
  isDelete: boolean,
  alertType: AlertType,
  orderTime: string,
  quantity: number,
};

export const Product = (props: Props) => {
  const {
    orderId,
    orderDetailId,
    productId,
    productName,
    note,
    status,
    isDelete,
    alertType,
    orderTime,
    quantity,
  } = props;

  const { tableRefetch } = useUpdateTables();
  const { mutateAsync, isLoading } = usePatchOrderItemFinish();

  const handleFinish = async () => {
    if (status !== ProductDetailStatus.IN_PROGRESS) { return; }
    const { status: mutateAsyncStatus } = await mutateAsync({ orderId, detailId: orderDetailId, productId });
    if (mutateAsyncStatus === 'success') {
      tableRefetch();
    }
  };

  return (
    <div
      className={clsx(
        'rounded border px-3 py-2 ',
        {
          'border-warn': !isDelete && status === ProductDetailStatus.IN_PROGRESS && alertType === AlertType.HIGH,
          'border-black/10': !isDelete && !(status === ProductDetailStatus.IN_PROGRESS && alertType === AlertType.HIGH),
          'bg-black/10': !isDelete && status !== ProductDetailStatus.IN_PROGRESS,
          'bg-black/5': isDelete,
        },
      )}
    >
      {isLoading && <Loading />}
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
              'text-fs-7',
              !isDelete && status === ProductDetailStatus.IN_PROGRESS && {
                'text-warn': alertType === AlertType.HIGH,
                'text-secondary': alertType === AlertType.MIDDLE,
                'text-primary': alertType === AlertType.LOW,
              },
              !isDelete && status === ProductDetailStatus.IN_PROGRESS && 'text-info',
              !isDelete && status !== ProductDetailStatus.IN_PROGRESS && 'text-black/85',
              isDelete && 'text-black/85',
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
        !isDelete && status === ProductDetailStatus.IN_PROGRESS && {
          'bg-warn': alertType === AlertType.HIGH,
          'bg-secondary': alertType === AlertType.MIDDLE,
          'bg-primary': alertType === AlertType.LOW,
        },
        !isDelete && status !== ProductDetailStatus.IN_PROGRESS && 'bg-black/25 text-black/85',
        !isDelete && status === ProductDetailStatus.IN_PROGRESS && 'bg-primary text-white',
        isDelete && 'bg-black/25 text-black/85',
      )}
      onClick={handleFinish}
      >
        <span className="text-fs-6">
          { isDelete && '已退點' }
          { !isDelete && status === ProductDetailStatus.IN_PROGRESS && '出菜' }
          { !isDelete && status !== ProductDetailStatus.IN_PROGRESS && '已完成' }
        </span>
      </button>
    </div>
  );
};

export default Product;
