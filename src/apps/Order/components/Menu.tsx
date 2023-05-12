import clsx from 'clsx';
import { Logo } from '@/components/common';
import { Sidebar } from './Sidebar';

export const Menu = () => (
    <div className="w-fit bg-white">
      <div
        className={clsx(
          'flex items-center justify-center',
        )}
      >
      <Logo />
      </div>

      <Sidebar />
    </div>
);

export default Menu;
