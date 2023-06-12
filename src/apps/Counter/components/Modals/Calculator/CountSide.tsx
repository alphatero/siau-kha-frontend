import clsx from 'clsx';
import { useState } from 'react';
import { Button, Icons } from '@/components/common';
import { CalButton } from './CalButton';

export const CountSide = () => {
  const [input, setInput] = useState('');

  const handleClick = (num: number | string) => {
    setInput(input + num.toString());
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };

  // 計算並回傳找零
  const handleCalculate = (sum: number) => {
    if (input === '') return 0;
    const change = parseInt(input, 10) - parseInt(sum.toString(), 10);
    return change;
  };

  const handleSave = () => {
    console.log('save');
  };

  return (
    <div className="flex w-1/2 flex-col justify-between space-y-9">
      <div
        className={clsx(
          'flex flex-1 flex-col justify-between',
          'rounded border border-secondary/20 bg-cover',
          'p-2 text-fs-6',
        )}
      >
        <div className="flex justify-between">
          <span>餐點合計</span>
          <span className="text-h6">NT$ 6,080</span>
        </div>
        <div className="flex justify-between">
          <span>服務費</span>
          <span className="text-h6">NT$ 608</span>
        </div>
        <div className="w-full border border-primary"></div>
        <div className="flex justify-between">
          <span>應收</span>
          <span className="text-h6">NT$ 6,688</span>
        </div>
        <div className="flex items-center justify-between">
          <span>實收</span>
          <input
            type="text"
            value={input}
            readOnly
            className="w-[100px] rounded-md border border-black/10"
            placeholder="輸入金額"
          />
        </div>
        <div className="flex justify-between">
          <span>找零</span>
          <span className="text-h6">NT$ {handleCalculate(6688)}</span>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-x-6 gap-y-2 rounded bg-secondary/10 px-3 py-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <CalButton
            key={i}
            onClick={() => handleClick(i + 1)}
            text={(i + 1).toString()}
          />
        ))}
        <CalButton onClick={() => handleClick(0)} text="0" />
        <CalButton onClick={() => handleClick('00')} text="00" />
        <Button
          color="secondary"
          onClick={handleBack}
          className="flex items-center justify-center"
        >
          <div className="w-4">
            <Icons.BackSpace />
          </div>
        </Button>
      </div>
      <div className="flex justify-between space-x-4">
        <Button outline color="secondary" className="w-full">
          取消
        </Button>
        <Button color="primary" className="w-full" onClick={handleSave}>
          儲存
        </Button>
      </div>
    </div>
  );
};

export default CountSide;
