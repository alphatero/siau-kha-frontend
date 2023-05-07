import { Button, Icons } from '@/components/common';
import { CheckSideItem } from './CheckSideItem';
import { Constants } from '../constants';

export const CheckSide = () => (
    <div className='w-[384px] flex-none py-3'>
      <div className="flex h-full w-full flex-col bg-white px-4 py-6">
        <h2 className="text-h4 text-primary">點餐紀錄</h2>
        <ul className='mt-4 space-y-3'>
          {
            Constants.OrderList.map((order, i) => (
              <CheckSideItem
                key={i}
                name={order.name}
                price={order.price}
                quantity={order.quantity}
                note={order.note}
              />
            ))
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
          <button className='text-secondary/85'>
            <Icons.TrashCan className='h-6' />
          </button>
        </div>
        <Button className='mt-auto w-full py-2' color='primary'>
          <span className='text-h5'>送出訂單</span>
        </Button>
      </div>
    </div>
);

export default CheckSide;
