import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Button, Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { Radio } from 'flowbite-react';
import { useStore } from '../../stores';

export const Memo = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();

  const { setTriggerModal, orderItem } = useStore();

  const [checkedMemo, setCheckedMemo] = useState<string>();

  const handleClick = (clickName: string) => {
    setCheckedMemo(clickName);
  };

  const openModal = (modalName: ModalCategory) => {
    setTriggerModal(modalName);
    setIsOpen(true);
  };

  useEffect(() => {
    const selectNote = orderItem.note.filter((item) => item.selected);
    if (selectNote.length) {
      setCheckedMemo(selectNote[0].name);
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex flex-col justify-around">
        <legend className='mx-auto mb-5 text-h4'>註記</legend>
        <ul className='text-fs-6 text-black/85'>
          {
            orderItem.note.map((noteItem, idx) => (
              <li
                key={idx}
                className={clsx(
                  'flex items-center justify-start py-2',
                  'border-t border-black/10 last:border-y',
                )}
              >
                <Radio
                  className='mr-11 h-4 w-4 checked:bg-primary'
                  checked={checkedMemo === noteItem.name}
                  onChange={() => handleClick(noteItem.name)}
                />
                <span>{noteItem.name}</span>
              </li>
            ))
          }
        </ul>
        <div className={clsx(
          'flex justify-between space-x-4 py-2',
          'border-b border-black/10 text-fs-6',
        )}>
          <input
            id="anotherMemo"
            type="text"
            className={clsx(
              'flex-1 px-2 py-1',
              'rounded border border-black/10',
              'text-black/85 placeholder:text-black/50 focus:ring-transparent',
            )}
            placeholder='註記'
          />
          <Button color="secondary" outline className='!rounded'>
            <span className=''>新增</span>
          </Button>
        </div>
        <div className={clsx(
          'absolute inset-x-0 bottom-0',
          'mb-6 flex space-x-6 px-6',
        )}>
          <Button
            className='w-full py-2'
            color='secondary'
            outline
          >
            <span className='text-fs-6'>新增其他註記</span>
          </Button>
          <Button
            className='w-full py-2'
            color='primary'
            onClick={() => openModal('check')}
          >
            <span className='text-fs-6'>送出訂單</span>
          </Button>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Memo;
