import clsx from 'clsx';
import { Spinner } from 'flowbite-react';
import { useModalStore } from '@/stores/modal';
import { useStandby } from '../../hooks/useStandby';
import { useStore } from '../../stores';

export const Standby = () => {
  const { standbyList, isLoading } = useStandby();

  const { setIsOpen } = useModalStore();

  const { setTriggerModal, setSelectedStandby } = useStore();

  const handleOpenModal = (id: string) => {
    setTriggerModal('reservationMeal');
    setIsOpen(true);
    setSelectedStandby(id);
  };

  if (isLoading) return <div className='flex items-center justify-center'><Spinner /></div>;

  return (
  <ul className="no-scrollbar z-10 h-full w-[190px] space-y-4 overflow-y-scroll">
    {standbyList?.map((item, index) => (
      <li
        className={clsx(
          'animate-move-up space-y-1',
          'rounded border border-primary',
          'bg-white px-2 py-1',
          'cursor-pointer',
        )}
        key={index}
        onClick={() => handleOpenModal(item.id)}
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
