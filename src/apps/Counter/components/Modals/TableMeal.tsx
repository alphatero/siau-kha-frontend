import clsx from 'clsx';
import { Button, TextField, Loading } from '@/components/common';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modal';
import { usePatchTable } from '@/services/mutation';
import { TableStatus } from '@/types/order';
import { useStore } from '../../stores';
import { useUpdateList } from '../../hooks/useUpdateList';

type OnMealType = {
  customerNum: number;
};

export const TableMeal = () => {
  const { setIsOpen } = useModalStore();
  const { selectedTable, list } = useStore();
  const { mutateAsync, isLoading } = usePatchTable();
  const { refetch } = useUpdateList();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnMealType>();

  const onSubmit = async (data: OnMealType) => {
    const res = await mutateAsync({
      id: selectedTable,
      status: TableStatus.MEAL,
      customerNum: Number(data.customerNum),
    });
    setIsOpen(false);

    if (res.status === 'success') {
      refetch();
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-1 flex-col space-y-6">
        {list
          .filter((t) => t.id === selectedTable)
          .map((table) => (
            <>
              <h5
                className={clsx(
                  'w-full border-b border-black/10',
                  'pb-4 text-h5',
                )}
              >
                {table?.name}
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
                <div className="text-black/85">
                  <TextField
                    label="請輸入用餐人數"
                    type="number"
                    placeholder="輸入人數"
                    {...register('customerNum', {
                      required: '此為必填',
                      min: { value: 1, message: '至少1位' },
                      max: {
                        value: table.seat ? table.seat + 2 : 0,
                        message: `最多${table.seat ? table.seat + 2 : 0}位`,
                      },
                    })}
                  />
                  <p className="mt-1 text-warn">
                    {errors.customerNum?.message}
                  </p>
                </div>

                <div className="flex justify-between space-x-4">
                  <Button
                    type="reset"
                    className="w-full"
                    outline
                    color="gray"
                    onClick={() => setIsOpen(false)}
                  >
                    取消
                  </Button>
                  <Button type="submit" className="w-full">
                    儲存
                  </Button>
                </div>
              </form>
            </>
          ))}
      </div>
    </>
  );
};

export default TableMeal;
