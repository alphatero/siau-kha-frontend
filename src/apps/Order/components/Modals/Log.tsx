import clsx from 'clsx';
import { Modal, Button } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';
import { LogButtons } from './LogButtons';
import { LogItem } from './LogItem';

export const Log = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { table } = useStore();

  type OrderItem = {
    name: string;
    price: number;
    quantity: number;
    button: {
      isCooking: boolean;
      hasServed: boolean;
    };
  }

  type FirstOrderType = {
    title: string;
    orderTime: string;
    orderList: OrderItem[];
  };

  type AnotherOrderType = {
    title: string;
    dataList: {
      orderTime: string;
      orderList: OrderItem[];
    }[];
  };

  type PromotionInfoType = {
    title: string;
    name: string;
    discount: number;
  };

  const logData: {
    firstOrder: FirstOrderType;
    anotherOrder: AnotherOrderType;
    promotionInfo: PromotionInfoType;
  } = {
    firstOrder: {
      title: '訂單內容',
      orderTime: '2023/06/05 12:00',
      orderList: [
        {
          name: '澳洲牛舌',
          price: 10790,
          quantity: 2,
          button: {
            isCooking: true,
            hasServed: false,
          },
        },
        {
          name: '北海道干貝',
          price: 350,
          quantity: 3,
          button: {
            isCooking: false,
            hasServed: true,
          },
        },
        {
          name: '豪華全牛套餐',
          price: 1980,
          quantity: 1,
          button: {
            isCooking: false,
            hasServed: false,
          },
        },
      ],
    },
    anotherOrder: {
      title: '加點',
      dataList: [
        {
          orderTime: '2023/06/05 12:00',
          orderList: [
            {
              name: '可爾必思',
              price: 90,
              quantity: 3,
              button: {
                isCooking: false,
                hasServed: false,
              },
            },
            {
              name: '明蝦',
              price: 350,
              quantity: 1,
              button: {
                isCooking: false,
                hasServed: true,
              },
            },
          ],
        },
        {
          orderTime: '2023/06/05 12:00',
          orderList: [
            {
              name: 'A5 日本和牛套餐',
              price: 2200,
              quantity: 1,
              button: {
                isCooking: false,
                hasServed: false,
              },
            },
            {
              name: '經典霜降牛套餐',
              price: 1880,
              quantity: 2,
              button: {
                isCooking: false,
                hasServed: true,
              },
            },
          ],
        },
      ],
    },
    promotionInfo: {
      title: '折扣',
      name: '全單折讓 300 元優惠活動',
      discount: 300,
    },
  };

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
              {logData.firstOrder.title}
            </h3>
            <ul>
              {
                logData.firstOrder.orderList.map((item) => (
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
            <p className='mt-2 whitespace-nowrap text-right text-black/50'>送出時間：{logData.firstOrder.orderTime}</p>
          </li>

          {
            logData.anotherOrder.dataList.map((anotherOrderItem) => (
              <li
                className='mb-4'
                key={anotherOrderItem.orderTime}
              >
                <h3 className='mb-2 border-b-2 border-b-primary pb-1 text-h5 text-primary'>
                  {logData.anotherOrder.title}
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
              {logData.promotionInfo.title}
            </h3>
            <div className='mb-2 flex items-center justify-between'>
              <span>{logData.promotionInfo.name}</span>
              <span className='rounded-md border border-secondary px-1 text-secondary'>
                折扣{logData.promotionInfo.discount}
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
