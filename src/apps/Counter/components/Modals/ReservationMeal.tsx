import clsx from 'clsx';
import { Button, Loading, TextField } from '@/components/common';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modal';
import { Fragment, useMemo, useState } from 'react';
import { TableStatus } from '@/types/order';
import { useDeleteReservation, usePatchReservation } from '@/services/mutation';
import { useStore } from '../../stores';
import { useStandby } from '../../hooks/useStandby';
import { useUpdateList } from '../../hooks/useUpdateList';

type OnMealType = {
  id: string;
  name: string;
  customerNum: number;
  phone: string;
  tableId: string;
};

export const ReservationMeal = () => {
  const { setIsOpen } = useModalStore();
  const { selectedStandby } = useStore();
  const { standbyList, refetch: standbyRefetch } = useStandby();
  const { list, refetch } = useUpdateList();
  const { mutateAsync, isLoading } = usePatchReservation();
  const { mutateAsync: deleteMutateAsync } = useDeleteReservation();
  const [table, setTable] = useState<string>(
    list.filter((t) => t.status === TableStatus.IDLE)?.[0]?.id ?? '',
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnMealType>({
    defaultValues: useMemo(
      () => standbyList?.find((s) => s.id === selectedStandby),
      [],
    ),
  });

  const onSubmit = async (data: OnMealType) => {
    const res = await mutateAsync({
      id: data.id,
      tableId: data.tableId,
      customerNum: Number(data.customerNum),
    });
    setIsOpen(false);

    if (res.status === 'success') {
      refetch();
      standbyRefetch();
    }
  };

  const onCancel = async () => {
    const res = await deleteMutateAsync(selectedStandby);
    setIsOpen(false);

    if (res.status === 'success') {
      standbyRefetch();
    }
  };

  return (
    <>
      {isLoading && <Loading />}
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
          <div className="space-y-4 text-black/85">
            <TextField
              label="請輸入顧客姓名"
              type="text"
              {...register('name', { required: '此為必填' })}
              placeholder="輸入姓名"
            />

            <TextField
              label="請輸入電話"
              type="text"
              {...register('phone', { required: '此為必填' })}
              placeholder="輸入電話"
            />

            {list
              .filter((t, i) => (table === '' ? i === 0 : t.id === table))
              .map((item) => (
                <Fragment key={item.id}>
                  <TextField
                    label="請輸入用餐人數"
                    type="number"
                    placeholder="輸入人數"
                    {...register('customerNum', {
                      required: '此為必填',
                      min: { value: 1, message: '至少1位' },
                      max: {
                        value: item.seat ? item.seat + 2 : 0,
                        message: `最多${item.seat ? item.seat + 2 : 0}位`,
                      },
                    })}
                  />
                  <p className="mt-1 text-warn">
                    {errors.customerNum?.message}
                  </p>
                </Fragment>
              ))}

            <div className="flex flex-col space-y-2">
              <label>選擇桌次 :</label>
              <select
                className="rounded-md border border-black/10"
                {...register('tableId', { required: '此為必填' })}
                value={table}
                onChange={(e) => setTable(e.target.value)}
              >
                {list.map((t) => (
                  <option
                    value={t.id}
                    key={t.id}
                    disabled={t.status === TableStatus.MEAL}
                  >
                    {`${t.name} ${t.status}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <input type="hidden" {...register('id')} value={selectedStandby} />

          <div className="flex justify-between space-x-4">
            <Button
              type="button"
              className="w-full"
              outline
              color="gray"
              onClick={onCancel}
            >
              取消候位
            </Button>
            <Button type="submit" className="w-full">
              確認
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReservationMeal;
