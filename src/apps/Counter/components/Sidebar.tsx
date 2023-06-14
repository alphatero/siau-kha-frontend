import { Auth, IconButton } from '@/components/common';
import clsx from 'clsx';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../stores';

export const Sidebar = () => {
  const { setTriggerModal } = useStore();
  const { setIsOpen } = useModalStore();

  const onClick = () => {
    setTriggerModal('selectTable');
    setIsOpen(true);
  };

  return (
  <div
    className={clsx(
      'h-screen bg-white px-4 py-6',
      ' border-l border-black/10',
      'flex flex-col justify-between',
    )}
  >
    <div className="relative">
      <span
        className={clsx(
          'absolute right-0 rounded-full bg-warn px-2',
          'text-fs-6 text-white',
          '-translate-y-2 translate-x-2',
        )}
      >
        2
      </span>

      <IconButton containerClasses="w-12 text-primary" icon="bill" />
    </div>

    <div className="flex flex-col items-center space-y-4">
      <Auth position="right" absolute='bottom'/>
      <IconButton containerClasses="w-10 text-primary" icon="settlement" onClick={onClick}/>
    </div>
  </div>
  );
};

export default Sidebar;
