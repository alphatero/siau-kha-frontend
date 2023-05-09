import { Spinner } from 'flowbite-react';
import clsx from 'clsx';

export const Loading = () => (
    <div
      className={clsx(
        'flex items-center justify-center',
        'fixed left-0 top-0',
        'h-screen w-screen',
        'bg-black/50',
      )}
    >
      <Spinner />
    </div>
);

export default Loading;
