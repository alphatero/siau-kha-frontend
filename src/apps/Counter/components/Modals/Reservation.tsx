import clsx from 'clsx';
import { Button, TextField } from '@/components/common';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modal';

type StandbyType = {
  name: string;
  customerNum: number;
  phone: string;
};

export const Reservation = () => {
  const { setIsOpen } = useModalStore();
  const {
    register,
    handleSubmit,
  } = useForm<StandbyType>();

  const onSubmit = (data: StandbyType) => {
    console.log(data);
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

          <TextField label="請輸入顧客姓名" type="text" {...register('name')} />

          <TextField label="請輸入電話" type="text" {...register('phone')} />

          <TextField label="請輸入用餐人數" type="number" {...register('customerNum')} />

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
