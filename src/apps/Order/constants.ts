import { ModalLogType } from '@/types/order';
import { ProductDetailStatus } from '@/types/kitchen';

export const ModalLogData: ModalLogType = {
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
          status: ProductDetailStatus.IN_PROGRESS,
          isDelete: false,
        },
        {
          id: 'new01-meal02',
          name: '澳洲牛舌',
          price: 980,
          finalPrice: 880,
          quantity: 2,
          note: [],
          status: ProductDetailStatus.IN_PROGRESS,
          isDelete: false,
        },
        {
          id: 'new01-meal03',
          name: '海膽',
          price: 80,
          finalPrice: 80,
          quantity: 5,
          note: ['不要海膽'],
          status: ProductDetailStatus.IN_PROGRESS,
          isDelete: false,
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
          status: ProductDetailStatus.IN_PROGRESS,
          isDelete: false,
        },
        {
          id: 'new01-meal03',
          name: '海膽',
          price: 80,
          finalPrice: 80,
          quantity: 5,
          note: ['不要海膽'],
          status: ProductDetailStatus.IN_PROGRESS,
          isDelete: false,
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
          status: ProductDetailStatus.IN_PROGRESS,
          isDelete: false,
        },
        {
          id: 'new01-meal03',
          name: '明蝦',
          price: 80,
          finalPrice: 80,
          quantity: 5,
          note: [],
          status: ProductDetailStatus.IN_PROGRESS,
          isDelete: false,
        },
      ],
    },
  ],
  total: 7782,
};

export default ModalLogData;
