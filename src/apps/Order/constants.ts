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

export const ModalLogDataNew = {
  orderLogList: [
    {
      id: 'new01',
      createTime: '2023/06/05 12:10',
      detail: [
        {
          id: 'new01-meal01',
          name: '豪華全牛套餐',
          price: 1980,
          finalPrice: 1980,
          quantity: 1,
          note: ['不要蔥'],
          status: 'IN_PROGRESS', // IN_PROGRESS 待上菜 /  FINISH 出菜 / SUCCESS 已上菜
          isDelete: false, // is_delete 則為已退點餐點
        },
        {
          id: 'new01-meal02',
          name: '澳洲牛舌',
          price: 980,
          finalPrice: 880,
          quantity: 2,
          note: [],
          status: 'FINISH', // IN_PROGRESS 待上菜 /  FINISH 出菜 / SUCCESS 已上菜
          isDelete: false, // is_delete 則為已退點餐點
        },
        {
          id: 'new01-meal03',
          name: '海膽',
          price: 80,
          finalPrice: 80,
          quantity: 5,
          note: ['不要海膽'],
          status: 'IN_PROGRESS', // IN_PROGRESS 待上菜 /  FINISH 出菜 / SUCCESS 已上菜
          isDelete: false, // is_delete 則為已退點餐點
        },
      ],
    },
    {
      id: '648b1ba7cae4e6df5ac2aa88',
      createTime: '2023/06/05 13:10',
      detail: [
        {
          id: 'new02-meal01',
          name: '牛套餐',
          price: 1980,
          finalPrice: 1980,
          quantity: 1,
          note: ['要蔥'],
          status: 'IN_PROGRESS', // IN_PROGRESS 待上菜 /  FINISH 出菜 / SUCCESS 已上菜
          isDelete: false, // is_delete 則為已退點餐點
        },
        {
          id: 'new01-meal03',
          name: '海膽',
          price: 80,
          finalPrice: 80,
          quantity: 5,
          note: ['不要海膽'],
          status: 'IN_PROGRESS', // IN_PROGRESS 待上菜 /  FINISH 出菜 / SUCCESS 已上菜
          isDelete: false, // is_delete 則為已退點餐點
        },
      ],
    },
    {
      id: 'new03',
      createTime: '2023/06/05 13:30',
      detail: [
        {
          id: 'new03-meal01',
          name: '可爾必思',
          price: 980,
          finalPrice: 580,
          quantity: 4,
          note: ['去冰'],
          status: 'IN_PROGRESS', // IN_PROGRESS 待上菜 /  FINISH 出菜 / SUCCESS 已上菜
          isDelete: false, // is_delete 則為已退點餐點
        },
        {
          id: 'new01-meal03',
          name: '明蝦',
          price: 80,
          finalPrice: 80,
          quantity: 5,
          note: [],
          status: 'IN_PROGRESS', // IN_PROGRESS 待上菜 /  FINISH 出菜 / SUCCESS 已上菜
          isDelete: false, // is_delete 則為已退點餐點
        },
      ],
    },
  ],
  total: 7782,
};
