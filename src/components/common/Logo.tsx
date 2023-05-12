import clsx from 'clsx';
import { Icons } from './Icons';

export const Logo = () => (
  <h1
    className={clsx(
      'flex items-center justify-center',
      'space-x-2 px-2 py-4 text-h5',
      'border-b border-black/10',
    )}
  >
    <span className="h-5 w-5 text-primary">
      <Icons.Logo />
    </span>
    <span>燒角 Siau Kha</span>
  </h1>
);

export default Logo;
