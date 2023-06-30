import { useEffect } from 'react';
import clsx from 'clsx';
import { Loading } from '@/components/common';
import {
  ProductDetailStatus,
} from '@/types/kitchen';
import { TableStatus, TableType, ResOrderDetailType } from '@/types/order';
import { useStore } from '../stores';

import { TableTab } from './TableTab';
import { TableOrder } from './TableOrder';
import { useUpdateTables } from '../hooks/useUpdateTable';

function getNewActiveTabs(activeTabs: string[], newTab: string): string[] {
  let newActiveTab;

  if (activeTabs.includes(newTab)) {
    // 如果點擊的 tab 已在 activeTabs 中，則移除
    newActiveTab = activeTabs.filter((tab) => tab !== newTab);
  } else if (activeTabs.length < 3) {
    // 如果 activeTabs 還未滿，則直接添加新的 tab
    newActiveTab = [...activeTabs, newTab];
  } else {
    // 如果 activeTabs 已滿，則移除最早添加的 tab，並添加新的 tab
    newActiveTab = [...activeTabs.slice(1), newTab];
  }

  return newActiveTab;
}

export const Main = () => {
  const {
    tables, tableList, activeList, setActiveList, activeTabs, setActiveTabs, setCurrentTab, isFirstTimeLoading,
  } = useStore();

  const { isTableLoading } = useUpdateTables();

  const checkCount = (count: number, detail: ResOrderDetailType) => (detail.status === ProductDetailStatus.IN_PROGRESS
    ? count + 1
    : count);

  // 取得未送餐的訂單數量
  const getProductDetailUnsent = (order: TableType): number => {
    if (order.status !== TableStatus.MEAL) return 0;
    return order.orderDetail?.flat().reduce(checkCount, 0) || 0;
  };

  const activateTabHandler = (newTab: string) => {
    if (newTab) {
      setCurrentTab(newTab);
    }
    const newActiveTab = getNewActiveTabs(activeTabs, newTab);
    setActiveTabs(newActiveTab);
    const activeTable = tables.filter((table) => activeTabs.includes(table.id));

    setActiveList(activeTable);
  };

  const isActiveTable = (table: TableType) => activeTabs.includes(table.id);

  return (
    <div className="px-8">
      <main>
        <ul className="my-10 flex items-center border-b border-primary">
          {tables?.map((table) => (
            <li key={table.id}>
              <TableTab
                tableId={table.id}
                tableName={table.name}
                unsentCount={getProductDetailUnsent(table)}
                isShow={activeTabs.includes(table.id)}
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
          {isTableLoading && isFirstTimeLoading ? (
            <Loading />
          ) : (
            tables
              ?.filter(isActiveTable)

              .map((table) => <TableOrder key={table.id} table={table} />)
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
