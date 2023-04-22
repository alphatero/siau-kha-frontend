import { useState } from 'react';
import clsx from 'clsx';
import { Dropdown } from 'flowbite-react';

export default function Example() {
  const [isRed, setIsRed] = useState(false);
  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <h2 className='text-lg'>Example page</h2>
      <p className={clsx(
        'font-bold text-blue-500',
        isRed && 'text-red-500',
      )}>
        測試 clsx 運行的字串
      </p>

      <button
        className={clsx(
          'rounded px-4 py-2 font-bold',
          'bg-blue-500 hover:bg-blue-700 active:bg-red-400',
          'text-white active:text-black',
        )}
        onClick={() => handleClick()}
      >
        switch color
      </button>

      <h2 className='mt-2 text-lg'>Flowbite example</h2>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
