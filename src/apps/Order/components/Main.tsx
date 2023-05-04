import clsx from 'clsx';
import Image from 'next/image';
import { SearchLabel } from '@/components/common';
import { CheckSide } from './CheckSide';

type tagsType = '套餐' | '肉品' | '沙拉' | '飲料' | '海鮮' | '人氣單點';

type ProductItemType = {
  id: number;
  name: string;
  type: '單一' | '套餐';
  tags: tagsType | tagsType[];
  price: number;
  image: string;
  sortNo: number;
};

export const Main = () => {
  const productList: ProductItemType[] = [
    {
      id: 1,
      name: 'A5 日本和牛套餐',
      type: '單一',
      tags: '肉品',
      price: 2200,
      image: 'https://picsum.photos/220/180',
      sortNo: 1,
    },
    {
      id: 3,
      name: '豪華全牛套餐',
      type: '單一',
      tags: '肉品',
      price: 1980,
      image: 'https://picsum.photos/250/280',
      sortNo: 4,
    },
    {
      id: 8,
      name: '經典霜降牛套餐',
      type: '單一',
      tags: '肉品',
      price: 1880,
      image: 'https://picsum.photos/320/180',
      sortNo: 9,
    },
  ];

  return (
    <div className={clsx(
      'flex flex-row',
      'h-full space-x-6 bg-highlight pl-6 pr-8',
    )}>
      <main className='flex-1'>
        <div className={clsx(
          'flex flex-row items-end',
          'mb-4 space-x-2 pt-8',
          'text-primary',
        )}>
          <h2 className="text-h4">套餐</h2>
          <p className="text-fs-6">餐點列表</p>
        </div>
        <SearchLabel placeholder='餐點名稱' />
        <ul className='mt-6 flex flex-row flex-wrap items-start justify-between gap-6'>
          {
            productList.map((menu, i) => (
              <li
                key={i}
                className={clsx(
                  'group flex-[47%] grow-0',
                  'flex flex-col items-center',
                )}>
                <div className={clsx(
                  'relative mb-5 h-[180px] w-full',
                  'overflow-hidden rounded-lg group-hover:shadow-lg',
                )}>
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    sizes='100%'
                    fill
                  />
                </div>
                <p className="text-h5 text-black/80 group-hover:text-primary">{menu.name}</p>
                <span className="text-fs-6 text-black">NT ${menu.price}</span>
              </li>
            ))
          }
        </ul>
      </main>
      <CheckSide />
    </div>
  );
};

export default Main;
