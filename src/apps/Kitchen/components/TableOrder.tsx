import { useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import type { Product as ProductType } from '@/types/kitchen';
import { ProductDetailStatus } from '@/types/kitchen';

import { ProductFilterButton } from './ProductFilterButton';
import { Product } from './Product';
import useSortAndAlertByOrderTime from '../hooks/useSortAndAlertByOrderTime';
import { FilterButton } from '../constants';

type Props = {
  tableName: string;
};

export const TableOrder = (props: Props) => {
  const {
    tableName,
  } = props;

  const productList: Array<ProductType> = [
    {
      id: '1',
      product_name: 'A5 日本和牛套餐',
      note: '瘦肉多一點',
      status: ProductDetailStatus.IN_PROGRESS,
      is_delete: false,
      order_time: '2023-06-12 10:44',
    },
    {
      id: '2',
      product_name: '燒角精選飲品',
      note: '少冰',
      status: ProductDetailStatus.IN_PROGRESS,
      is_delete: false,
      order_time: '2023-06-12 10:49',
    },
    {
      id: '3',
      product_name: '燒角精選飲品',
      note: '少冰',
      status: ProductDetailStatus.IN_PROGRESS,
      is_delete: false,
      order_time: '2023-06-12 10:54',
    },
    {
      id: '4',
      product_name: '安格斯牛小排',
      status: ProductDetailStatus.FINISH,
      is_delete: false,
      order_time: '2023-06-11 08:01',
    },
  ];

  const sortedAndAlertedData = useSortAndAlertByOrderTime(productList);

  const [productFilter, setProductFilter] = useState(ProductDetailStatus.ALL);

  return (
    <div
      className={clsx(
        'flex max-h-[75vh] w-full flex-col',
        'rounded-md border border-black/10 bg-white',
      )}
    >
      <div className='px-6 pt-6 pb-4 border-b border-black/10'>
        <h5 className="text-h5">{tableName}</h5>
      </div>

      <ul className='flex gap-[10px] px-6 pb-4 pt-6'>
        {
          FilterButton.map((button) => (
            <li key={button.status}>
              <ProductFilterButton
                title={button.title}
                active={productFilter === button.status}
                quantity={sortedAndAlertedData.filter((product) => product.status === button.status).length}
                onClick={() => setProductFilter(button.status)}
              />
            </li>
          ))
        }
      </ul>

      <ul className={clsx(
        'mx-6 mb-6 overflow-y-auto',
        'flex flex-row flex-wrap gap-y-4',
      )}>
        {
          sortedAndAlertedData
            .filter((product) => productFilter === ProductDetailStatus.ALL || product.status === productFilter)
            ?.map((product) => (
              <li key={product.id} className='w-full'>
                <Product
                  productName={product.product_name}
                  note={product.note}
                  status={product.status}
                  alertType={product.alertType}
                  orderTime={dayjs(product.order_time).format('HH:mm')}
                />
              </li>
            ))
        }
      </ul>
    </div>
  );
};

export default TableOrder;
