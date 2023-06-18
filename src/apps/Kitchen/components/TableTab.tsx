import clsx from 'clsx';
import { Icons } from '@/components/common';

type Props = {
  tableName: string;
  isShow: boolean;
  unsentCount: number;
  onClick: (tableName: string) => void;
};

export const TableTab = (props: Props) => {
  const {
    tableName, isShow, unsentCount, onClick
  } = props;

  return (
    <button
      className={clsx(
        'flex min-w-[147px] items-center justify-center rounded-t',
        'border border-b-0 px-4 py-2',
        isShow ? 'border-primary bg-primary/85 text-white' : ' border-black/25 bg-black/10 text-black/85',
      )}
      onClick={() => onClick(tableName)}
    >
      { isShow
        && (<span className="h-4 mr-3">
          <Icons.Done />
        </span>)
      }
      <h5 className="text-fs-6">{tableName} ({unsentCount})</h5>
    </button>
  );
};

export default TableTab;
