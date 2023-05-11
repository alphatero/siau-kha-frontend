import clsx from 'clsx';
import Image from 'next/image';
import { SearchLabel } from '@/components/common';
import { CheckSide } from './CheckSide';
import { Constants } from '../constants';

export const Main = () => (
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
        <ul className={clsx(
          'mt-6 max-h-[75vh] overflow-y-auto',
          'flex flex-row flex-wrap items-start justify-between gap-6',
        )}>
          {
            Constants.MainProductList.map((menu, i) => (
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

export default Main;
