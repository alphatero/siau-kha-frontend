import clsx from 'clsx';

type Props = {
  productName: string,
  note?: string,
  status: string,
  isAlert: boolean,
};

export const Product = (props: Props) => {
  const {
    productName,
    note,
    status,
    isAlert,
  } = props;

  return (
    <div
    className={clsx(
      'rounded border px-3 py-2',
      isAlert ? ' border-warn' : 'border-black/10 ',
      status === 'FINISH' && 'bg-black/10',
    )}>
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-baseline space-x-1'>
          <h6 className="text-h6 text-black/85">{productName}</h6>
          <span className="text-fs-6 text-secondary/85">
            {note}
          </span>
        </div>
        <span className="text-fs-7 text-info">15:29</span>
      </div>
      <button className={clsx(
        'w-full rounded-s py-1',
        isAlert && 'bg-warn',
        status === 'FINISH' ? 'bg-black/25 text-black/85' : 'bg-primary text-white',
      )}
      >
        <span className="text-fs-6">{`${status === 'IN_PROGRESS' ? '出菜' : '已完成'}`}</span>
      </button>
    </div>
  );
};

export default Product;
