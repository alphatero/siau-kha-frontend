import { Auth } from '@/components/common';
import clsx from 'clsx';

export const Sidebar = () => (
  <div
    className={
      clsx(
        'h-screen bg-white px-4 py-6',
        ' border-l border-black/10',
        'flex flex-col justify-between',
      )}
  >
    <h1>Menu</h1>
    <div>
      <Auth position='right' />
    </div>
  </div>
);

export default Sidebar;
