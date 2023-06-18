import { Spinner } from 'flowbite-react';
import clsx from 'clsx';

export const Loading = () => (
    <div
      className={clsx(
        'z-20 flex items-center justify-center',
        'absolute left-0 top-0',
        'h-full w-full',
        'bg-black/50',
      )}
    >
      <Spinner />
    </div>
);

export default Loading;
