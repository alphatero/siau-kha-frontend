import clsx from 'clsx';
import { Spinner } from 'flowbite-react';
import { useStandby } from '../../hooks/useStandby';

export const Standby = () => {
  const { standbyList, isLoading } = useStandby();

  if (isLoading) return <div className='flex items-center justify-center'><Spinner/></div>;

  return (
  <ul className="z-10 w-[190px] space-y-4">
    {standbyList?.map((item, index) => (
      <li
        className={clsx(
          'animate-move-up space-y-1',
          'rounded border border-primary',
          'bg-white px-2 py-1',
          'cursor-pointer',
        )}
        key={index}
      >
        <p className="flex justify-between">
          <span className="text-fs-6 text-black/85">{item.name}</span>
          <span className="text-fs-6 text-secondary/85">{item.customerNum} 人</span>
        </p>
        <p className="text-fs-6 text-black/85">{item.phone}</p>
      </li>
    ))}
  </ul>
  );
};

export default Standby;
