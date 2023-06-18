import clsx from 'clsx';
import { useState } from 'react';
import { Icons } from '../Icons';
import { RoleBox } from './RoleBox';

export const Auth = ({ position, absolute }: {position: string, absolute: string}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className={clsx(
          'h-12 w-12',
          'rounded-full bg-secondary/85 p-2 hover:bg-secondary active:bg-secondary',
          'transition-all duration-300 ease-in-out hover:scale-110 active:scale-90',
        )}
        onClick={() => setOpen(!open)}
      >
        <Icons.User className="text-white" />
      </button>

      {open && <RoleBox position={position} absolute={absolute}/>}
    </div>
  );
};

export default Auth;
