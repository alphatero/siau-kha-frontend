import clsx from 'clsx';
import { Button } from '@/components/common';
import { ProductDetailStatus } from '@/types/kitchen';

type Props = {
  removeItem: () => void;
  serveItem: () => void;
  isLoading: boolean;
  isDelete: boolean;
  status: ProductDetailStatus;
}

export const LogButtons = (props: Props) => {
  const {
    removeItem, serveItem, isLoading, isDelete, status,
  } = props;

  const isDisable = status === ProductDetailStatus.SUCCESS || isLoading;

  const switchButtonByStatus = (currentStatus: ProductDetailStatus) => {
    switch (currentStatus) {
      case ProductDetailStatus.IN_PROGRESS:
        return (
          <Button
            color="secondary"
            outline
            disabled
          >製作中</Button>
        );
      case ProductDetailStatus.SUCCESS:
        return (
          <Button
            color="primary"
            outline
            disabled
          >已上菜</Button>
        );
      default:
        return (
          <Button
            color="primary"
            onClick={serveItem}
          >上菜</Button>
        );
    }
  };

  return (
    <div className={clsx(
      'flex w-full items-center justify-between',
      'space-x-4 whitespace-nowrap',
    )}>
      {
        isDelete && <div className='ml-auto rounded-md bg-black/50 px-2 py-1 text-white'>已退點</div>
      }
      {
        isDelete || (
          <>
            <Button
              onClick={removeItem}
              color={isDisable ? 'gray' : 'warn'}
              disabled={isDisable}
            >
              退點{isLoading && '中'}
            </Button>
            { switchButtonByStatus(status) }
          </>
        )
      }
    </div>
  );
};

export default LogButtons;
