import clsx from 'clsx';
import { Button } from '@/components/common';

type Props = {
  removeItem: () => void;
  isDelete: boolean;
  isCooking: boolean;
  hasServed: boolean;
}

export const LogButtons = (props: Props) => {
  const {
    removeItem, isDelete, isCooking, hasServed,
  } = props;

  return (
    <div className={clsx(
      'flex w-full items-center justify-between',
      'space-x-4 whitespace-nowrap',
    )}>
      <Button
        onClick={removeItem}
        color={isDelete ? 'gray' : 'warn'}
        disabled={isDelete || hasServed}
      >退點</Button>
      {
        isCooking ? (
          <Button
            color="secondary"
            outline
            disabled
          >製作中</Button>
        ) : (
          <Button
            color="primary"
            outline={hasServed}
            disabled={hasServed}
          >{hasServed ? '已上菜' : '上菜'}</Button>
        )
      }
    </div>
  );
};

export default LogButtons;
