import clsx from 'clsx';
import { Button, TextField, IconButton } from '@/components/common';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modal';
import { useState } from 'react';
import { CalButton } from './CalButton';

export const Calculator = () => {
  const { setIsOpen } = useModalStore();
  const [input, setInput] = useState('');

  const handleClick = (num: number) => {
    setInput(input + num.toString());
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="flex h-full w-[800px] flex-1 flex-col space-y-6">
      <div className="flex justify-between border-b border-black/10 pb-4">
        <div className="flex space-x-4">
          <IconButton
            containerClasses="w-2 text-black"
            icon="back"
            onClick={() => {
              console.log('click');
            }}
          />
          <h4 className="text-h5 text-primary">Table A2</h4>
        </div>
        <p className='space-x-2 text-fs-6 text-black/85'>
          <span>人數：4</span>
          <span>時間：2023/03/06 19:20</span>
        </p>
      </div>

      <div className="flex h-full flex-1 space-x-6 px-9">
        <div className='flex w-1/2 flex-col justify-between'>

        <table className='w-full table-auto'>
          <thead className='border-b border-primary text-h5 text-black/85'>
            <tr>
              <th className='pb-2 text-center'>#</th>
              <th className='text-left'>品名</th>
              <th className='text-center'>數量</th>
              <th className='text-center'>單價</th>
              <th className='text-center'>金額</th>
            </tr>
          </thead>
          <tbody className='text-fs-6 text-black/85'>
            <tr>
              <td className='py-2 text-center'>1</td>
              <td className='text-left'>A5 日本和牛套餐</td>
              <td className='text-center'>1</td>
              <td className='text-center'>5,680</td>
              <td className='text-center'>5,680</td>
            </tr>
            <tr>
              <td className='py-2 text-center'>2</td>
              <td className='text-left'>巨干貝</td>
              <td className='text-center'>2</td>
              <td className='text-center'>160</td>
              <td className='text-center'>320</td>
            </tr>
            <tr>
              <td className='py-2 text-center'>3</td>
              <td className='text-left'>燒角認證米</td>
              <td className='text-center'>4</td>
              <td className='text-center'>20</td>
              <td className='text-center'>80</td>
            </tr>

            </tbody>
          </table>
          <div className='flex w-full justify-between border-t border-primary pt-2'>
            <span>
              合計 3 項
            </span>
            <p>
              <span>共</span>
              <span className='ml-2 text-h6 text-warn'>NT$ 6,080</span>
            </p>
          </div>
        </div>

        <div className='flex w-1/2 flex-col justify-between space-y-9'>
          <div className={clsx(
            'flex flex-1 flex-col justify-between',
            'rounded border border-secondary/20 bg-cover',
            'p-2 text-fs-6',
          )}>
            <div className="flex justify-between">
              <span>餐點合計</span>
              <span className='text-h6'>NT$ 6,080</span>
            </div>
            <div className="flex justify-between">
              <span>服務費</span>
              <span className='text-h6'>NT$ 608</span>
            </div>
            <div className="w-full border border-primary"></div>
            <div className="flex justify-between">
              <span>應收</span>
              <span className='text-h6'>NT$ 6,688</span>
            </div>
            <div className="flex items-center justify-between">
              <span>實收</span>
              <input type="text" value={input} readOnly className='w-[100px] rounded-md border border-black/10' placeholder='輸入金額' />
            </div>
            <div className="flex justify-between">
              <span>找零</span>
              <span className='text-h6'>NT$ 12</span>
            </div>
          </div>
          <div className='grid flex-1 grid-cols-3 gap-x-6 gap-y-2 rounded bg-secondary/10 px-3 py-4'>
            {
              Array.from({ length: 9 }).map((_, i) => (
                <CalButton key={i} onClick={() => handleClick(i + 1)} text={(i + 1).toString()} />

              ))
            }
          <Button outline>
            0
          </Button>
          <Button outline>
            00
          </Button>
          <Button color='secondary' onClick={handleBack}>
            {'<-'}
          </Button>

          </div>
          <div className='flex justify-between space-x-4'>
            <Button outline color='secondary' className='w-full'>
              取消
            </Button>
            <Button color='primary' className='w-full'>
              儲存
            </Button>
            </div>
        </div>

      </div>

    </div>
  );
};

export default Calculator;
