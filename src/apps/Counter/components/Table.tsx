import { Countdown, Icons } from '@/components/common';
import clsx from 'clsx';
import Image from 'next/image';
import { TableStatus } from '@/types/order';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../stores';

type Props = {
  id: string;
  title: string;
  status: string;
  customerNum?: number;
  seat?: number;
  isPayed?: boolean;
  time?: string;
};

export const Table = (props: Props) => {
  const {
    id, title, status, customerNum, isPayed, time, seat,
  } = props;

  const { setIsOpen } = useModalStore();

  const { setTriggerModal, setSelectedTable } = useStore();

  const handleOpenModal = () => {
    if (status !== TableStatus.IDLE) {
      return;
    }
    setTriggerModal('tableMeal');
    setIsOpen(true);
    setSelectedTable(id);
  };

  return (
    <div
      className={clsx(
        'flex w-full flex-col',
        'rounded-md border border-black/10 bg-white',
        'cursor-pointer',
      )}
      onClick={handleOpenModal}
    >
      <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
        <h5 className="text-h5">{title}</h5>

        <div
          className={clsx(
            'bg-warn px-2 py-1 text-white',
            'rounded',
            (isPayed || status === TableStatus.IDLE) && 'opacity-0',
          )}
        >
          未結帳
        </div>
      </div>

      <div
        className={clsx(
          'flex h-full flex-col items-center justify-center',
          'space-y-4 px-6 py-5',
        )}
      >
        <p className="flex items-center text-fs-6 text-black/85">
          {customerNum}/{seat}
          {status === TableStatus.MEAL && (
            <span className="ml-2 h-3 w-3">
              <Icons.Lock />
            </span>
          )}
        </p>
        <div
          className={clsx(
            'rounded-full px-2 py-1',
            status === TableStatus.MEAL ? 'bg-primary' : 'bg-black/25',
          )}
        >
          {status === TableStatus.MEAL ? (
            <span className="text-fs-6 text-white">用餐中</span>
          ) : (
            <span className="text-fs-6 text-black/85">閒置</span>
          )}
        </div>
        <div className="relative flex h-full w-full items-center space-x-2">
          <Image
            src={`/images/${status === TableStatus.MEAL ? 'meal' : 'idel'}.png`}
            alt="status"
            fill={true}
            className="object-contain"
            priority
            sizes="100%"
          />
        </div>
        { time && <p className="text-h5 text-warn">
            <Countdown currentTime={time} />
          </p>
        }
      </div>
    </div>
  );
};

export default Table;
