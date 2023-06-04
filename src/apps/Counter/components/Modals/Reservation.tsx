import clsx from 'clsx';
import { Button, TextField } from '@/components/common';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modal';
import { usePostReservation } from '@/services/mutation';
import { useStandby } from '../../hooks/useStandby';

type StandbyType = {
  name: string;
  customerNum: number;
  phone: string;
};

export const Reservation = () => {
  const { setIsOpen } = useModalStore();
  const { mutateAsync } = usePostReservation();
  const { refetch } = useStandby();
  const {
    register,
    handleSubmit,
  } = useForm<StandbyType>();

  const onSubmit = (data: StandbyType) => {
    mutateAsync(data);
    setIsOpen(false);
    refetch();
  };
  return (
    <div className="flex flex-1 flex-col space-y-6">
      <h4
        className={clsx(
          'w-full border-b border-black/10',
          'pb-4 text-center text-h4',
        )}
      >
        登記候位
      </h4>

      <form
        className="flex h-full flex-1 flex-col justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='space-y-4 text-black/85'>

          <TextField label="請輸入顧客姓名" type="text" {...register('name')} placeholder='輸入姓名' />

          <TextField label="請輸入電話" type="text" {...register('phone')} placeholder='輸入電話'/>

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

export default Reservation;
