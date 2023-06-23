import { Radio, Label } from 'flowbite-react';
import { Button, Loading } from '@/components/common';
import clsx from 'clsx';
import { useModalStore } from '@/stores/modal';
import { TableStatus } from '@/types/order';
import { useGetCheckoutList } from '@/services/mutation';
import { useStore } from '../../stores';

export const SelectTable = () => {
  const {
    list, setSelectedCheckout, selectedCheckout, setTriggerModal, setBill,
  } = useStore();
  const { setIsOpen } = useModalStore();

  const { mutateAsync, isLoading } = useGetCheckoutList();

  const handleConfirm = async () => {
    if (!selectedCheckout) return;
    const res = await mutateAsync({ id: selectedCheckout.orderId });

    if (res) {
      setBill(res);
      setTriggerModal('calculate');
    }
  };

  if (isLoading) return <Loading />;

  return (
    <fieldset className='flex flex-1 flex-col justify-around' id="checked">
      <div className='flex justify-between'>

    {
      list.map((item) => (
        <div key={item.id}>
          <Radio
            id={item.id}
            name={item.id}
            className='sr-only'
            value={item.name}
            onChange={() => setSelectedCheckout(item)}
            checked={selectedCheckout?.id === item.id}
            disabled={item.status !== TableStatus.MEAL || item.isPay === true || item.orderDetail?.length === 0}
          />
          <Label htmlFor={item.id} className='checked:text-white'>
            <div className={clsx(
              'px-4 py-2',
              (item.status !== TableStatus.MEAL || item.isPay === true || item.orderDetail?.length === 0) ? 'bg-gray-100 text-black/50'
                : 'border-primary text-primary',
              'cursor-pointer',
              'rounded-md border text-fs-6',
              selectedCheckout?.id === item.id && 'bg-primary text-white',
            )}>
              <p>{item.name}</p>
              </div>
          </Label>
        </div>
      ))
      }
      </div>
      <div className={clsx(
        'absolute inset-x-0 bottom-0',
        'mb-6 flex space-x-6 px-6',
      )}>
        <Button color='gray' className='w-full' outline onClick={() => setIsOpen(false)}>取消</Button>
        <Button color={selectedCheckout ? 'primary' : 'gray'} className='w-full' onClick={handleConfirm} disabled={!selectedCheckout}>確認</Button>
      </div>
  </fieldset>
  );
};

export default SelectTable;
