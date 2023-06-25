import {
  useState, useEffect, useRef,
} from 'react';
import dayjs from 'dayjs';

import type { ProductDetailType, AlertedProductType } from '@/types/kitchen';
import { AlertType, ProductDetailStatus } from '@/types/kitchen';

function useSortAndAlertByOrderTime(rawData: Array<ProductDetailType>): AlertedProductType[] {
  const [sortedData, setSortedData] = useState<AlertedProductType[]>([]);
  const intervalIdRef = useRef<NodeJS.Timeout | number>();

  const transferAlertedProduct = (data: Array<ProductDetailType>) => data.length > 0 && data.map((item) => {
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

  const sortAndAlert = (data: Array<ProductDetailType>) => {
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

    setSortedData(sortAlertTypeData);
  };

  useEffect(() => {
    sortAndAlert(rawData); // 初始的排序和警告級別設置
  }, []); // 每當rawData變化時，都會重新設置間隔

  useEffect(() => {
    if (intervalIdRef.current) clearInterval(intervalIdRef.current); // 如果timer已存在則清空
    intervalIdRef.current = setInterval(() => sortAndAlert(rawData), 60 * 1000); // 每60秒重新計算一次

    return () => {
      clearInterval(intervalIdRef.current); // 防止內存溢出
    };
  }, [rawData]); // 每當rawData變化時，都會重新設置間隔

  return sortedData;
}

export default useSortAndAlertByOrderTime;
