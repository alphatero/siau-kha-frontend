import clsx from 'clsx';
import { useState } from 'react';
import { Icons } from '../Icons';
import { RoleBox } from './RoleBox';

export const Auth = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <button
        className={clsx(
          'mx-4 h-10 w-10',
          'rounded-lg bg-primary/85 p-2 hover:bg-primary active:bg-primary',
          'transition-all duration-300 ease-in-out hover:scale-110 active:scale-90',
        )}
        onClick={() => setOpen(!open)}
      >
        <Icons.User className="text-white" />
      </button>

      {open && <RoleBox />}
    </div>
  );
};

export default Auth;
