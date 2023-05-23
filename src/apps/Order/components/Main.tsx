import clsx from 'clsx';
import Image from 'next/image';
import { SearchBar, Loading } from '@/components/common';
import { fetchProductItem } from '@/services/query/api/order';
import { OrderItemType } from '@/types/order';
import { CheckSide } from './CheckSide';
import { useStore } from '../stores';
import { useUpdateProducts } from '../hooks/useUpdateProducts';

export const Main = () => {
  const {
    setFilteredProductList, orderList, setOrderList, filteredProducts, products, isReset,
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

  const generateNewOrderList = (orderItem: OrderItemType) => {
    const isExist = orderList.some((item) => item.id === orderItem.id);

    if (!isExist) return [...orderList, orderItem];

    const newOrderList = orderList.map((item) => {
      if (item.id === orderItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    return newOrderList;
  };

  const handleClick = async (productId: string) => {
    const { orderItem } = await fetchProductItem(productId);
    const newOrderList = generateNewOrderList(orderItem);
    setOrderList(newOrderList);
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
            isLoading ? <Loading/> : filteredProducts.map((menu, i) => (
              <li
                key={i}
                onClick={() => handleClick(menu.id)}
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
