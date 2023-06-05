import { Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';

export const Log = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { table } = useStore();

  type FirstOrderType = {
    title: string;
    orderTime: string;
    orderList: {
      name: string;
      price: number;
      quantity: number;
      button: {
        canRemove: boolean;
        hasServed: boolean;
      };
    }[];
  };

  type AnotherOrderType = {
    title: string;
    dataList: {
      sortNo: number;
      orderList: {
        name: string;
        price: number;
        quantity: number;
        button: {
          canRemove: boolean;
          hasServed: boolean;
        };
      }[];
    }[];
  };

  type PromotionInfoType = {
    title: string;
    name: string;
    discount: number;
    button: {
      canRemove: boolean;
    };
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
          price: 790,
          quantity: 2,
          button: {
            canRemove: true,
            hasServed: false,
          },
        },
        {
          name: '北海道干貝',
          price: 350,
          quantity: 3,
          button: {
            canRemove: false,
            hasServed: true,
          },
        },
        {
          name: '豪華全牛套餐',
          price: 1980,
          quantity: 1,
          button: {
            canRemove: true,
            hasServed: false,
          },
        },
      ],
    },
    anotherOrder: {
      title: '加點',
      dataList: [
        {
          sortNo: 1,
          orderList: [
            {
              name: '可爾必思',
              price: 90,
              quantity: 3,
              button: {
                canRemove: true,
                hasServed: false,
              },
            },
            {
              name: '明蝦',
              price: 350,
              quantity: 1,
              button: {
                canRemove: false,
                hasServed: true,
              },
            },
          ],
        },
        {
          sortNo: 2,
          orderList: [
            {
              name: 'A5 日本和牛套餐',
              price: 2200,
              quantity: 1,
              button: {
                canRemove: true,
                hasServed: false,
              },
            },
            {
              name: '經典霜降牛套餐',
              price: 1880,
              quantity: 2,
              button: {
                canRemove: true,
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
      button: {
        canRemove: true,
      },
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex flex-col justify-around">
        <legend className='mx-auto mb-5 text-h4'>Table {table.name} 點餐紀錄</legend>
        <div className='text-fs-6 text-black/85'>
          <h3 className='text-h5 text-primary'>{logData.firstOrder.title}</h3>
          <ul>
            {
              logData.firstOrder.orderList.map((item) => (
                <li className='mb-2 flex justify-between' key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <span>{item.quantity}</span>
                </li>
              ))
            }
          </ul>

          {
            logData.anotherOrder.dataList.map((anotherOrderItem) => (
              <>
                <h3 className='text-h5 text-primary'>{logData.anotherOrder.title}</h3>
                <ul key={anotherOrderItem.sortNo}>
                  {
                    anotherOrderItem.orderList.map((item) => (
                      <li className='mb-2 flex justify-between' key={item.name}>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <span>{item.quantity}</span>
                      </li>
                    ))
                  }
                </ul>
              </>
            ))
          }

          <h3 className='text-h5 text-primary'>{logData.promotionInfo.title}</h3>
          <div>
            <span>{logData.promotionInfo.name}</span>
            <span>折扣{logData.promotionInfo.discount}</span>
          </div>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Log;
