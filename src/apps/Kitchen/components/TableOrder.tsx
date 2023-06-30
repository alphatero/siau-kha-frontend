import { useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import type {
  KitchenTableType, AlertedProductType, OrderDetailType, ResDetailType,
} from '@/types/kitchen';
import { ProductDetailStatus } from '@/types/kitchen';
import type { TableType } from '@/types/order';

import { useSortAndAlertByOrderTime } from '../hooks/useSortAndAlertByOrderTime';
import { FilterButton } from '../constants';

import { ProductFilterButton } from './ProductFilterButton';
import { Product } from './Product';

type Props = {
  table: TableType;
};

const toOrderDetail = (resDetail: ResDetailType): OrderDetailType => ({
  id: resDetail.id,
  isDelete: resDetail.is_delete,
  orderDetailId: resDetail.order_detail_id,
  orderTime: resDetail.order_time,
  name: resDetail.product_name,
  note: resDetail.product_note,
  quantity: resDetail.product_quantity,
  status: resDetail.status,
});

export const TableOrder = (props: Props) => {
  const {
    table: {
      name: tableName, orderDetail, orderId,
    },
  } = props;
  const { sortAndAlert } = useSortAndAlertByOrderTime();

  console.log('orderDetail', orderDetail);

  const orderDetailUnsent = orderDetail?.flat() || [];

  // const sortedAndAlertedData = useSortAndAlertByOrderTime(
  //   orderDetailUnsent.map((item) => toOrderDetail(item)),
  // );

  const [productFilter, setProductFilter] = useState(ProductDetailStatus.IN_PROGRESS);

  const countFilterButtonQuantity = (
    data: AlertedProductType[],
    status: ProductDetailStatus,
  ) => {
    if (status === ProductDetailStatus.ALL) return data.length;
    // 已出餐的數量 = 已出餐 + 已完成
    if (status === ProductDetailStatus.FINISH) {
      return data.filter((product) => product.status === status || product.status === ProductDetailStatus.SUCCESS).length;
    }
    return data.filter((product) => product.status === status).length;
  };

  // console.log('TableOrder', sortedAndAlertedData);

  return (
    <div
      className={clsx(
        'flex max-h-[75vh] w-full flex-col',
        'rounded-md border border-black/10 bg-white',
      )}>
      <div className="border-b border-black/10 px-6 pb-4 pt-6">
        <h5 className="text-h5">{tableName}</h5>
      </div>

      <ul className="flex gap-[10px] px-6 pb-4 pt-6">
        {FilterButton.map((button) => (
          <li key={button.status}>
            <ProductFilterButton
              title={button.title}
              active={productFilter === button.status}
              quantity={countFilterButtonQuantity(
                // sortedAndAlertedData,
                sortAndAlert(orderDetailUnsent.map((item) => toOrderDetail(item))),
                button.status,
              )}
              onClick={() => setProductFilter(button.status)}
            />
          </li>
        ))}
      </ul>

      <ul
        className={clsx(
          'no-scrollbar mx-6 mb-6 overflow-y-auto',
          'flex flex-row flex-wrap gap-y-4',
        )}>
        {sortAndAlert(orderDetailUnsent.map((item) => toOrderDetail(item)))
          .filter(
            (product) => productFilter === ProductDetailStatus.ALL
            || product.status === productFilter,
          )
          .map((product) => (
            <li key={product.id} className="w-full">
              <Product
                orderId={orderId}
                orderDetailId={product.orderDetailId}
                productId={product.id}
                productName={product.name}
                note={product.note}
                status={product.status}
                alertType={product.alertType}
                quantity={product.quantity}
                orderTime={dayjs(product.orderTime).format('HH:mm')}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TableOrder;
