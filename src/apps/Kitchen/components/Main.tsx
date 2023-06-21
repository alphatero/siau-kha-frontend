import { useEffect } from 'react';
import clsx from 'clsx';
import { Loading } from '@/components/common';
import {
  KitchenTableType,
  ProductDetailStatus,
  TableStatus,
} from '@/types/kitchen';
import { useStore } from '../stores';

import { TableTab } from './TableTab';
import { TableOrder } from './TableOrder';
import { useUpdateTables } from '../hooks/useUpdateTable';

export const Main = () => {
  // TODO test data
  const {
    tableList, activeList, setActiveList, activeTabs, setActiveTabs, setCurrentTab, isFirstTimeLoading,
  } = useStore();

  const { isLoading } = useUpdateTables();

  // 取得未送餐的訂單數量
  const getProductDetailUnsent = (order: KitchenTableType): number => {
    if (order.status !== TableStatus.MEAL) return 0;
    return (
      order.orderDetail
        ?.flat()
        .reduce(
          (count, detail) => (detail.status === ProductDetailStatus.IN_PROGRESS
            ? count + 1
            : count),
          0,
        ) || 0
    );
  };

  const activateTabHandler = (newTab: string) => {
    if (newTab) {
      setCurrentTab(newTab);
    }
    if (activeTabs.includes(newTab)) {
      // 如果點擊的 tab 已在 activeTabs 中，則移除
      const newActiveTab = activeTabs.filter((tab) => tab !== newTab);
      setActiveTabs(newActiveTab);
    } else if (activeTabs.length < 3) {
      // 如果 activeTabs 還未滿，則直接添加新的 tab
      const newActiveTab = [...activeTabs, newTab];
      setActiveTabs(newActiveTab);
    } else {
      // 如果 activeTabs 已滿，則移除最早添加的 tab，並添加新的 tab
      const newActiveTab = [...activeTabs.slice(1), newTab];
      setActiveTabs(newActiveTab);
    }
  };

  // 點擊Tab切換點單紀錄
  useEffect(() => {
    if (activeTabs.length < 1) return;
    const activeTable = tableList.filter((table) => activeTabs.includes(table.name));

    setActiveList(activeTable);
  }, [activeTabs]);

  return (
    <div className="px-8">
      <main>
        <ul className="my-10 flex items-center border-b border-primary">
          {tableList?.map((table) => (
            <li key={table.id}>
              <TableTab
                tableName={table.name}
                unsentCount={getProductDetailUnsent(table)}
                isShow={activeTabs.includes(table.name)}
                onClick={activateTabHandler}
              />
            </li>
          ))}
        </ul>
        <div
          className={clsx(
            'grid flex-1 gap-4',
            'col-span-3 grid-cols-3 grid-rows-1',
          )}
        >
          {isLoading && isFirstTimeLoading ? (
            <Loading />
          ) : (
            activeList
              ?.filter((table) => activeTabs.includes(table.name))
              .map((table) => <TableOrder key={table.id} table={table} />)
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
