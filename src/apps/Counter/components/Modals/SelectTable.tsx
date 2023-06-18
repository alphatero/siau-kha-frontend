import { Radio, Label } from 'flowbite-react';
import { Button } from '@/components/common';
import clsx from 'clsx';
import { useModalStore } from '@/stores/modal';
import { TableStatus } from '@/types/order';
import { useCheckoutList } from '@/services/query';
// import { getCheckoutList } from '@/services/query/api/checkout';
import { useStore } from '../../stores';

export const SelectTable = () => {
  const {
    list, setSelectedCheckout, selectedCheckout, setTriggerModal,
  } = useStore();
  const { setIsOpen } = useModalStore();
  const orderId = list.find((item) => item.id === selectedCheckout)?.orderId;
  const { data, refetch } = useCheckoutList(orderId ?? '');

  const handleConfirm = () => {
    if (!selectedCheckout) return;
    // getCheckoutList(orderId ?? '');
    refetch();
    console.log('data', data);
    setTriggerModal('calculate');
  };
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
            onChange={() => setSelectedCheckout(item.id)}
            checked={selectedCheckout === item.id}
            disabled={item.status !== TableStatus.MEAL}
          />
          <Label htmlFor={item.id} className='checked:text-white'>
            <div className={clsx(
              'px-4 py-2',
              item.status !== TableStatus.MEAL ? 'bg-gray-100 text-black/50'
                : 'border-primary text-primary',
              'cursor-pointer',
              'rounded-md border text-fs-6',
              selectedCheckout === item.id && 'bg-primary text-white',
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
        <Button color='primary' className='w-full' onClick={handleConfirm}>確認</Button>
      </div>
  </fieldset>
  );
};

export default SelectTable;
