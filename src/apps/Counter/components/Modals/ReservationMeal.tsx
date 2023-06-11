import clsx from 'clsx';
import { Button, TextField } from '@/components/common';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modal';
import { useMemo } from 'react';
import { TableStatus } from '@/types/order';
import { useStore } from '../../stores';
import { useStandby } from '../../hooks/useStandby';
import { useUpdateList } from '../../hooks/useUpdateList';

type OnMealType = {
  id: string;
  name: string;
  customerNum: number;
  phone: string;
  tableId: string
};

export const ReservationMeal = () => {
  const { setIsOpen } = useModalStore();

  const { selectedStandby, setTableOnMeal } = useStore();

  const { standbyList } = useStandby();

  const { list } = useUpdateList();

  const {
    register,
    handleSubmit,
  } = useForm<OnMealType>({
    defaultValues: useMemo(() => standbyList?.find((s) => s.id === selectedStandby), []),
  });

  const onSubmit = (data: OnMealType) => {
    setIsOpen(false);
    console.log('儲存', data);
    // FIXME: need update list
    setTableOnMeal(data.tableId, data.customerNum);
  };

  return (
    <div className="flex flex-1 flex-col space-y-6">
      <h4
        className={clsx(
          'w-full border-b border-black/10',
          'pb-4 text-center text-h4',
        )}
      >
        安排入座
      </h4>

      <form
        className="flex h-full flex-1 flex-col justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='space-y-4 text-black/85'>

          <TextField label="請輸入顧客姓名" type="text" {...register('name', { required: true }) } placeholder='輸入姓名'/>

          <TextField label="請輸入電話" type="text" {...register('phone', { required: true })} placeholder='輸入電話'/>

          <TextField label="請輸入用餐人數" type="number" {...register('customerNum', { required: true })} placeholder='輸入人數'/>

          <div className="flex flex-col space-y-2">
            <label>選擇桌次 :</label>
              <select className='rounded-md border border-black/10' {...register('tableId', { required: true })}>
                {
                  list.map((table) => (
                    <option value={table.id} key={table.id} disabled={table.status === TableStatus.MEAL}>
                      {`${table.name} ${table.status}`}
                    </option>
                  ))
                }
              </select>
          </div>

        </div>

        <input type="hidden" {...register('id')} value={selectedStandby} />

        <div className="flex justify-between space-x-4">
          <Button type="button" className="w-full" outline color="gray" onClick={() => setIsOpen(false)}>
            取消候位
          </Button>
          <Button type="submit" className="w-full">
            確認
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationMeal;
