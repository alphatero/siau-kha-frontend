import { Modal, Button } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';
import { LogItem } from './LogItem';
import { ModalLogData } from '../../constants';

export const Log = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { table } = useStore();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex flex-col justify-around">
        <legend className='mx-auto mb-5 text-h4'>Table {table.name} 點餐紀錄</legend>
        <ul className='text-fs-6 text-black/85'>
          <li className='mb-4'>
            <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
              {ModalLogData.firstOrder.title}
            </h3>
            <ul>
              {
                ModalLogData.firstOrder.orderList.map((item) => (
                  <LogItem
                    key={`firstOrder-${item.name}`}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    button={item.button}
                  />
                ))
              }
            </ul>
            <p className='mt-2 whitespace-nowrap text-right text-black/50'>送出時間：{ModalLogData.firstOrder.orderTime}</p>
          </li>

          {
            ModalLogData.anotherOrder.dataList.map((anotherOrderItem) => (
              <li
                className='mb-4'
                key={anotherOrderItem.orderTime}
              >
                <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
                  {ModalLogData.anotherOrder.title}
                </h3>
                <ul>
                  {
                    anotherOrderItem.orderList.map((item) => (
                      <LogItem
                        key={`anotherOrderItem-${item.name}`}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        button={item.button}
                      />
                    ))
                  }
                </ul>
                <p className='mt-2 whitespace-nowrap text-right text-black/50'>送出時間：{anotherOrderItem.orderTime}</p>
              </li>
            ))
          }

          <li className='mb-4'>
            <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
              {ModalLogData.promotionInfo.title}
            </h3>
            <div className='mb-2 flex items-center justify-between'>
              <span>{ModalLogData.promotionInfo.name}</span>
              <span className='rounded-md border border-secondary px-1 text-secondary'>
                折扣{ModalLogData.promotionInfo.discount}
              </span>
              <Button color='warn'>取消</Button>
            </div>
          </li>

          <li>
            <h3 className='mb-2 flex justify-end border-b-2 border-b-primary pb-1 text-h5 text-primary'>
              <span>總額：</span>
              <span>$2,371</span>
            </h3>
          </li>
        </ul>
      </fieldset>
    </Modal>
  );
};

export default Log;
