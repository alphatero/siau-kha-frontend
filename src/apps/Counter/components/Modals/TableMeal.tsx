import clsx from 'clsx';
import { Button, TextField } from '@/components/common';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';

type OnMealType = {
  customerNum: number;
};

export const TableMeal = () => {
  const { setIsOpen } = useModalStore();

  const { selectedTable } = useStore();

  const {
    register,
    handleSubmit,
  } = useForm<OnMealType>();

  const onSubmit = () => {
    setIsOpen(false);
    console.log('儲存');
  };
  return (
    <div className="flex flex-1 flex-col space-y-6">
      <h5
        className={clsx(
          'w-full border-b border-black/10',
          'pb-4 text-h5',
        )}
      >
        {selectedTable}
        <span
          className={clsx(
            'rounded-md border border-info text-fs-6 text-info',
            'ms-2 px-2 py-1',
          )}
        >
            用餐
        </span>
      </h5>

      <form
        className="flex h-full flex-1 flex-col justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='space-y-4 text-black/85'>

          <TextField label="請輸入用餐人數" type="number" {...register('customerNum')} placeholder='輸入人數' />

        </div>

        <div className="flex justify-between space-x-4">
          <Button type="reset" className="w-full" outline color="gray" onClick={() => setIsOpen(false)}>
            取消
          </Button>
          <Button type="submit" className="w-full">
            儲存
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TableMeal;
