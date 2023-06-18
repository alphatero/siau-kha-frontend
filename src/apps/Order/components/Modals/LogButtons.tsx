import clsx from 'clsx';
import { Button } from '@/components/common';
import { ProductDetailStatus } from '@/types/kitchen';

type Props = {
  removeItem: () => void;
  isDelete: boolean;
  status: ProductDetailStatus;
}

export const LogButtons = (props: Props) => {
  const {
    removeItem, isDelete, status,
  } = props;

  return (
    <div className={clsx(
      'flex w-full items-center justify-between',
      'space-x-4 whitespace-nowrap',
    )}>
      <Button
        onClick={removeItem}
        color={isDelete ? 'gray' : 'warn'}
        disabled={status !== ProductDetailStatus.SUCCESS}
      >退點</Button>
      {
        status === ProductDetailStatus.IN_PROGRESS ? (
          <Button
            color="secondary"
            outline
            disabled
          >製作中</Button>
        ) : (
          <Button
            color="primary"
            outline={status === ProductDetailStatus.SUCCESS}
            disabled={status === ProductDetailStatus.SUCCESS}
          >{status === ProductDetailStatus.SUCCESS ? '已上菜' : '上菜'}</Button>
        )
      }
    </div>
  );
};

export default LogButtons;
