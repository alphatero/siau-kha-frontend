import { Radio, Label } from 'flowbite-react';
import { Button } from '@/components/common';
import clsx from 'clsx';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';

export const SelectTable = () => {
  const {
    list, setSelectedTable, selectedTable, setTriggerModal,
  } = useStore();
  const { setIsOpen } = useModalStore();

  const handleConfirm = () => {
    if (!selectedTable) return;
    setTriggerModal('calculate');
    setIsOpen(true);
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
            onChange={() => setSelectedTable(item.id)}
            checked={selectedTable === item.id}
          />
          <Label htmlFor={item.id} className='checked:text-white'>
            <div className={clsx(
              'px-4 py-2',
              'rounded-md border border-primary',
              'cursor-pointer',
              'text-fs-6 text-primary',
              selectedTable === item.id && 'bg-primary text-white',
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
