import clsx from 'clsx';
import { Icons } from '@/components/common';
import { RegisterButton } from './RegisterButton';
import { Standby } from './Standby';

export const Menu = () => (
  <div
    className={clsx(
      'h-screen bg-white',
      'border-l border-black/10',
      'flex flex-col',
    )}
  >
    <h1
      className={clsx(
        'flex items-center justify-center',
        'space-x-2 py-4 text-h5',
        'border-b border-black/10',
      )}
    >
      <span className="h-5 w-5 text-primary">
        <Icons.Logo />
      </span>
      <span>燒角 Siau Kha</span>
    </h1>
    <div className={clsx(
      'relative flex h-full flex-col',
      'space-y-8 p-8',
    )}>
      <RegisterButton />

      <Standby />

      <div className="absolute flex h-5/6 flex-col">
        <div className="flex-1 translate-x-4 border-r border-primary/50" />
        <div
          className={clsx(
            'h-2 w-2 translate-x-5 rounded-full',
            'border border-primary',
          )}
        />
      </div>

    </div>
  </div>
);

export default Menu;
