import clsx from 'clsx';
import { useState } from 'react';
import { Button, Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { ModalCategory } from '@/types/order';
import { Radio } from 'flowbite-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStore } from '../../stores';

export const Memo = () => {
  const {
    isOpen, setIsOpen,
  } = useModalStore();
  const {
    register, handleSubmit, formState: { isValid },
  } = useForm<{anotherNote: string}>();

  const {
    setTriggerModal, orderItem, orderList, setOrderList, setOrderItem, resetOrderItem,
  } = useStore();

  const [checkedMemo, setCheckedMemo] = useState<string>(
    orderItem?.currentNote ?? '',
  );

  const handleClick = (clickName: string) => {
    setCheckedMemo(clickName);
  };

  const closeModal = (modalName: ModalCategory) => {
    setTriggerModal(modalName);
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<{ anotherNote: string }> = (data) => {
    setOrderItem({
      ...orderItem,
      note: [
        ...orderItem.note,
        {
          title: data.anotherNote,
        },
      ],
      currentNote: data.anotherNote,
    });
    setCheckedMemo(data.anotherNote);

    setOrderList(
      orderList.map((item) => {
        if (item.id === orderItem.id) {
          return {
            ...item,
            note: [
              ...item.note,
              {
                title: data.anotherNote,
              },
            ],
          };
        }
        return item;
      }),
    );
  };

  const onClick = () => {
    // 假如沒有選擇註記，就直接關閉 modal
    if (!checkedMemo) {
      closeModal('memo');
      return;
    }

    // 假如有選擇註記且currentNote已存在 orderList，就直接增加數量到 orderList，假如有選擇註記但註記不存在，就新增一個orderItem 到 orderList
    setOrderList(
      orderList.map((item) => {
        if (item.idx === orderItem.idx) {
          if (item?.currentNote === checkedMemo) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return {
            ...item,
            currentNote: checkedMemo,

          };
          // 找到沒有 currentNote 的 orderItem
        }
        return item;
      }),
    );

    resetOrderItem();
    closeModal('memo');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <fieldset className="flex flex-col justify-around">
        <legend className='mx-auto mb-5 text-h4'>註記</legend>
        <div className='text-fs-6 text-black/85'>
          {
            orderItem.note.map((noteItem, idx) => (
              <label
                key={idx}
                className={clsx(
                  'flex items-center justify-start py-2',
                  'border-t border-black/10 last:border-y',
                )}
              >
                <Radio
                  className='mr-11 h-4 w-4 checked:bg-primary'
                  checked={checkedMemo === noteItem.title}
                  onChange={() => handleClick(noteItem.title)}
                />
                <span>{noteItem.title}</span>
              </label>
            ))
          }
        </div>
        <form className={clsx(
          'flex justify-between space-x-4 py-2',
          'border-b border-black/10 text-fs-6',
        )}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            id="anotherMemo"
            type="text"
            className={clsx(
              'flex-1 px-2 py-1',
              'rounded border border-black/10',
              'text-black/85 placeholder:text-black/50 focus:ring-transparent',
            )}
            placeholder='註記'
            {...register('anotherNote', { required: true })}
          />
        <Button type='submit' color="secondary" outline className='!rounded' disabled={!isValid}>
            <span className=''>新增</span>
          </Button>
        </form>
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
            onClick={onClick}
          >
            <span className='text-fs-6'>確認</span>
          </Button>
        </div>
      </fieldset>
    </Modal>
  );
};

export default Memo;
