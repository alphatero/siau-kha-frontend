import { ModalLogType } from '@/types/order';

export const ModalLogData: ModalLogType = {
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

export default ModalLogData;
