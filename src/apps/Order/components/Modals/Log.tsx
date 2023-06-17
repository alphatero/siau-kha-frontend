import { Modal, Button, Loading } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { ModalLogListDetailType, ModalLogListType } from '@/types/order';
import { useStore } from '../../stores';
import { LogItem } from './LogItem';
import { useUpdateOrderLog } from '../../hooks/useUpdateOrderLog';

export const Log = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const {
    table, orderLog, currentPromotion, setCurrentPromotion,
  } = useStore();

  const { isLoading } = useUpdateOrderLog();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex min-w-[50vw] flex-col justify-around">
        <legend className='mx-auto mb-5 text-h4'>Table {table.name} 點餐紀錄</legend>
        <ul className='text-fs-6 text-black/85'>
          <li className='max-h-[450px] overflow-y-auto'>
            { isLoading && <Loading /> }
            {
              orderLog?.orderLogList && orderLog.orderLogList.length > 0 && (
                orderLog.orderLogList.map((
                  item: ModalLogListType,
                  index: number,
                ) => (
                  <div
                    className='mb-4'
                    key={`item-${index}`}
                  >
                    <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
                      {index === 0 ? '訂單內容' : '加點' }
                    </h3>
                    <ul>
                      {
                        item.detail.map((detailItem: ModalLogListDetailType) => (
                          <LogItem
                            key={detailItem.id}
                            name={detailItem.name}
                            price={detailItem.price}
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
              )
            }
          </li>

          {/* 折扣 */}
          <li className='mb-4 pt-2'>
            <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
              套用的折扣活動
            </h3>
            <div className='mb-2 flex items-center justify-between'>
              {
                currentPromotion ? (
                  <>
                    <div>
                      <span className='mb-1 block'>{currentPromotion.name}</span>
                      <span className='rounded-md border border-secondary px-1 text-secondary'>
                        {
                          currentPromotion.charge.discount ? (
                            <>折扣：{currentPromotion.charge.discountPrice}%</>
                          ) : (
                            <>折讓：${currentPromotion.charge.allowancePrice}元</>
                          )
                        }
                      </span>
                    </div>
                    <Button
                      onClick={() => setCurrentPromotion(null)}
                      color='warn'
                    >取消</Button>
                  </>
                ) : (
                  <span>無</span>
                )
              }
            </div>
          </li>

          <li>
            <h3 className='mb-2 flex justify-end border-b-2 border-b-primary pb-1 text-h5 text-primary'>
              <span>總額：</span>
              <span>$ {orderLog.total}</span>
            </h3>
          </li>
        </ul>
      </fieldset>
    </Modal>
  );
};

export default Log;
