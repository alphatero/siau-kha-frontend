import { Modal, Button } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { useEffect } from 'react';
import { useStore } from '../../stores';
import { LogItem } from './LogItem';
import { ModalLogData } from '../../constants';
import { useUpdateOrderLog } from '../../hooks/useUpdateOrderLog';

export const Log = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { table, setOrderLog, orderLog } = useStore();

  const { isLoading } = useUpdateOrderLog();

  useEffect(() => {
    console.log('=====-------------------------=====');
    if (isLoading) {
      console.log('isLoading', isLoading);
      setOrderLog({
        ...orderLog,
      });
    }
    console.log('orderLog', orderLog);
  }, [isLoading]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex min-w-[50vw] flex-col justify-around">
        <legend className='mx-auto mb-5 text-h4'>Table {table.name} 點餐紀錄</legend>
        <ul className='text-fs-6 text-black/85'>
          <li className='max-h-[450px] overflow-y-auto'>
            {
              ModalLogData.orderLogList.map((item, index) => (
                <div
                  className='mb-4'
                  key={`item-${index}`}
                >
                  <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
                    {index === 0 ? '訂單內容' : '加點' }
                  </h3>
                  <ul>
                    {
                      item.detail.map((detailItem) => (
                        <LogItem
                          key={detailItem.id}
                          name={detailItem.name}
                          price={detailItem.finalPrice}
                          quantity={detailItem.quantity}
                          note={detailItem.note}
                          status={detailItem.status}
                          isDelete={detailItem.isDelete}
                        />
                      ))
                    }
                  </ul>
                  <p className='mt-2 whitespace-nowrap text-right text-black/50'>
                    送出時間：{item.createTime}
                  </p>
                </div>
              ))
            }
          </li>

          {/* 折扣 */}
          <li className='mb-4 pt-2'>
            <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
              套用的折扣活動
            </h3>
            <div className='mb-2 flex items-center justify-between'>
              <span>折扣活動的名稱</span>
              <span className='rounded-md border border-secondary px-1 text-secondary'>
                折扣金額
              </span>
              <Button color='warn'>取消</Button>
            </div>
          </li>

          <li>
            <h3 className='mb-2 flex justify-end border-b-2 border-b-primary pb-1 text-h5 text-primary'>
              <span>總額：</span>
              <span>$ {ModalLogData.total}</span>
            </h3>
          </li>
        </ul>
      </fieldset>
    </Modal>
  );
};

export default Log;
