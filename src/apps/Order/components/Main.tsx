import clsx from 'clsx';
import Image from 'next/image';
import { SearchBar, Loading } from '@/components/common';
import { OrderItemType, ProductType } from '@/types/order';
import { CheckSide } from './OrderList';
import { useStore } from '../stores';
import { useUpdateProducts } from '../hooks/useUpdateProducts';

export const Main = () => {
  const {
    orderList,
    setFilteredProductList,
    setOrderList,
    filteredProducts,
    products,
    isReset,
    orderNumber,
    setOrderNumber,
  } = useStore();

  const { isLoading } = useUpdateProducts();

  // for search bar 模糊搜尋
  const handleSearch = (searchText: string) => {
    if (searchText === '') {
      setFilteredProductList(products);
      return;
    }
    const regex = new RegExp(`${searchText}`, 'i');
    const filtered = products.filter((menu) => regex.test(menu.name));
    setFilteredProductList(filtered);
  };

  // 確認點擊的餐點的note跟currentNote是否一樣
  const checkNote = (orderItem: OrderItemType, product: ProductType) => {
    if (orderItem.note.length !== product.note.length) {
      return false;
    }
    if (orderItem.currentNote) {
      return false;
    }
    return true;
  };

  const handleClick = (product: ProductType) => {
    // 如果點擊的餐點已經在點餐清單中，則數量+1
    const repeatItem = orderList.filter((item) => item.id === product.id && checkNote(item, product));
    if (repeatItem.length > 0) {
      const newItems = orderList.map((item) => {
        if (item.id === product.id && !item.currentNote) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return {
          ...item,
        };
      });
      setOrderList(newItems);
      return;
    }

    // 如果點擊的餐點不在點餐清單中，則新增一筆
    const newItem: OrderItemType = {
      idx: orderNumber + 1,
      id: product.id,
      name: product.name,
      price: product.price,
      note: product.note,
      tags: product.tags,
      quantity: 1,
    };
    setOrderNumber(orderNumber + 1);
    setOrderList([...orderList, newItem]);
  };

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
        <SearchBar placeholder='餐點名稱' handleSearch={handleSearch} isReset={isReset} />
        <div className='relative w-full'>

        <ul className={clsx(
          'mt-6 max-h-[75vh] overflow-y-auto',
          'flex flex-row flex-wrap items-start justify-between gap-6',
        )}>
          {
            isLoading ? <Loading/> : filteredProducts.map((menu: ProductType, i) => (
              <li
                key={i}
                onClick={() => handleClick(menu)}
                className={clsx(
                  'group flex-[47%] grow-0',
                  'flex cursor-pointer flex-col items-center',
                )}>
                <div className={clsx(
                  'relative mb-5 h-[180px] w-full',
                  'overflow-hidden rounded-lg group-hover:shadow-lg',
                )}>
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    sizes='100%'
                    style={{ objectFit: 'cover' }}
                    fill
                  />
                </div>
                <p className="text-h5 text-black/80 group-hover:text-primary">{menu.name}</p>
                <span className="text-fs-6 text-black">NT ${menu.price}</span>
              </li>
            ))
          }
          </ul>

       </div>
      </main>
      <CheckSide />
    </div>
  );
};

export default Main;
