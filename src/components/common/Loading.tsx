import { Spinner } from 'flowbite-react';
import clsx from 'clsx';

export const Loading = () => {
  return (
    <div
      className={clsx(
        'flex justify-center items-center',
        'fixed top-0 left-0',
        'w-screen h-screen',
        'bg-gray-900 bg-opacity-50',
      )}
    >
      <Spinner />
    </div>
  );
};
