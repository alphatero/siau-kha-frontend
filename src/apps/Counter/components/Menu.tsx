import clsx from 'clsx';
import { Icons, Button } from '@/components/common';

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
    <div className="relative flex h-full flex-col space-y-4 p-8">
      <Button className="bg-primary">
        <span className="flex items-center space-x-2">登記候位</span>
      </Button>
      <div className="absolute flex h-5/6 flex-col">
        <div className="flex-1 translate-x-6 border-r border-primary/50" />
        <div className="h-2 w-2 translate-x-7 rounded-full border border-primary" />
      </div>
      <ul className="z-10 w-[190px]">
        <li className="space-y-1 rounded border border-primary bg-white px-2 py-1">
          <p className="flex justify-between">
            <span className="text-fs-6 text-black/85">高先生</span>
            <span className="text-fs-6 text-secondary/85">4 人</span>
          </p>
          <p className="text-fs-6 text-black/85">0912-345-678</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
