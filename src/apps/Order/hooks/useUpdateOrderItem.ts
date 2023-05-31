import { useOrderItem } from '@/services/query';
import { useEffect } from 'react';
import { useStore } from '../stores';
import { OrderItemType } from '../../../types/order';

export const useUpdateOrderItem = () => {
  const {
    currentOrderItemId, setOrderList, orderList, clickMenuItemTimes,
  } = useStore();
  const { data, isLoading } = useOrderItem(currentOrderItemId);

  const increaseOrderItemQuantity = (orderItemId: string) => {
    const itemIsExist = orderList.some((item) => item?.id === orderItemId);

    if (itemIsExist) {
      const newOrderList = orderList.map((item) => {
        if (item.id === orderItemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return newOrderList;
    }
    return [...orderList, data?.orderItem];
  };

  useEffect(() => {
    if (isLoading) return;

    const newOrderList = increaseOrderItemQuantity(currentOrderItemId);
    setOrderList(newOrderList as OrderItemType[]);
  }, [data, clickMenuItemTimes]);

  return {
    orderItemIsLoading: isLoading,
  };
};

export default useUpdateOrderItem;
