import dayjs from 'dayjs';

import type { OrderDetailType } from '@/types/kitchen';
import { AlertType, ProductDetailStatus } from '@/types/kitchen';

export function useSortAndAlertByOrderTime() {
  const transferAlertedProduct = (data: OrderDetailType[]) => data.length > 0 && data.map((item) => {
    const diffInMinutes = dayjs().diff(dayjs(item.orderTime), 'minute');
    let alertType;

    switch (true) {
      case diffInMinutes < 5:
        alertType = AlertType.LOW;
        break;
      case diffInMinutes < 10:
        alertType = AlertType.MIDDLE;
        break;
      default:
        alertType = AlertType.HIGH;
    }

    return { ...item, alertType };
  });

  const sortAndAlert = (data: OrderDetailType[]) => {
    // step1: setAlertType
    const getAlertTypeData = transferAlertedProduct(data);

    // step2: sort
    const sortAlertTypeData = [...(getAlertTypeData || [])].sort((a, b) => {
      if (a.status !== ProductDetailStatus.IN_PROGRESS) {
        return 1;
      }
      if (b.status !== ProductDetailStatus.IN_PROGRESS) {
        return -1;
      }
      return dayjs(a.orderTime).unix() - dayjs(b.orderTime).unix();
    });

    return sortAlertTypeData;
  };

  return {
    sortAndAlert,
  };
}

export default useSortAndAlertByOrderTime;
