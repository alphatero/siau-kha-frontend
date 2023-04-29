import clsx from 'clsx';
import { Icons } from '@/components/common';
import { Sidebar } from './Sidebar';

export const Menu = () => {
  return (
    <div className="w-fit border border-black-50 min-h-screen">
      <div
        className={clsx(
          'flex justify-center items-center',
          'h-[60px] border-b border-black-50',
        )}
      >
        <h1 className="text-h5 flex items-center justify-center space-x-2 px-2">
          <span className="h-5 w-5 text-primary">
            <Icons.Logo />
          </span>
          <span>燒角 Siau Kha</span>
        </h1>
      </div>

      <Sidebar />
    </div>
  );
};
