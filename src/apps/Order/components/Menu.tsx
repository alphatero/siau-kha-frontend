import clsx from 'clsx';
import { Icons } from '@/components/common';
import { Sidebar } from './Sidebar';

export const Menu = () => (
    <div className="min-h-screen w-fit bg-white">
      <div
        className={clsx(
          'flex items-center justify-center',
          'border-b border-gray-200 py-4',
        )}
      >
        <h1 className={clsx('flex items-center justify-center', 'space-x-2 px-2 text-h5')}>
          <span className="h-5 w-5 text-primary">
            <Icons.Logo />
          </span>
          <span>燒角 Siau Kha</span>
        </h1>
      </div>

      <Sidebar />
    </div>
);

export default Menu;
