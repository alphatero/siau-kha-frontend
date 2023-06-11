import {
  useState, useEffect, useRef,
} from 'react';
import dayjs from 'dayjs';

import type { Product, AlertedProduct } from '@/types/kitchen';
import { AlertType, ProductDetailStatus } from '@/types/kitchen';

function useSortAndAlertByOrderTime(data: Array<Product>): Array<AlertedProduct> {
  const [sortedData, setSortedData] = useState<Array<AlertedProduct>>([]);
  const intervalIdRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const sortAndAlert = () => {
      const result = [...data].map((item) => {
        const diffInMinutes = dayjs().diff(dayjs(item.order_time), 'minute');
        let alertType;

        if (diffInMinutes < 5) {
          alertType = AlertType.LOW;
        } else if (diffInMinutes < 10) {
          alertType = AlertType.MIDDLE;
        } else {
          alertType = AlertType.HIGH;
        }

        return { ...item, alertType };
      }).sort((a, b) => {
        if (a.status === ProductDetailStatus.FINISH) {
          return 1;
        }
        if (b.status === ProductDetailStatus.FINISH) {
          return -1;
        }
        return dayjs(a.order_time).unix() - dayjs(b.order_time).unix();
      });

      if (JSON.stringify(result) !== JSON.stringify(sortedData)) {
        setSortedData(result);
      }
    };

    sortAndAlert(); // 初始的排序和警告級別設置
    intervalIdRef.current = setInterval(sortAndAlert, 60 * 1000); // 每60秒重新計算一次

    return () => {
      clearInterval(intervalIdRef.current); // 防止內存溢出
    };
  }, [data, sortedData]); // 每當rawData變化時，都會重新設置間隔

  return sortedData;
}

export default useSortAndAlertByOrderTime;
