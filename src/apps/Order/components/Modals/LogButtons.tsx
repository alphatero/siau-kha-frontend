import clsx from 'clsx';
import { Button } from '@/components/common';
import { ProductDetailStatus } from '@/types/kitchen';

type Props = {
  removeItem: () => void;
  removeStatus: boolean;
  serveItem: () => void;
  serveStatus: boolean;
  patchIsLoading: boolean;
  isLoading: boolean;
  isDelete: boolean;
  status: ProductDetailStatus;
}

export const LogButtons = (props: Props) => {
  const {
    removeItem, removeStatus, serveItem, serveStatus, patchIsLoading, isLoading, isDelete, status,
  } = props;

  const isDisable = status === ProductDetailStatus.SUCCESS || isLoading;

  const switchButtonByStatus = (currentStatus: ProductDetailStatus) => {
    if (serveStatus) {
      return (
        <Button
          color="primary"
          outline
          disabled
        >已上菜</Button>
      );
    }

    switch (currentStatus) {
      case ProductDetailStatus.IN_PROGRESS:
        return (
          <>
            <Button
              onClick={removeItem}
              color={isDisable ? 'gray' : 'warn'}
              disabled={isDisable}
            >
              退點{isLoading && '中'}
            </Button>
            <Button
              color="secondary"
              outline
              disabled
            >製作中</Button>
          </>
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
          <>
            <Button
              onClick={removeItem}
              color={isDisable ? 'gray' : 'warn'}
              disabled={isDisable}
            >
              退點{isLoading && '中'}
            </Button>
            <Button
              color="primary"
              onClick={serveItem}
            >上菜{patchIsLoading && '中'}</Button>
          </>
        );
    }
  };

  return (
    <div className={clsx(
      'flex w-full items-center justify-end',
      'space-x-4 whitespace-nowrap',
    )}>
      {
        (isDelete || removeStatus) ? (
          <div className='ml-auto rounded-md bg-black/50 px-2 py-1 text-white'>已退點</div>
        ) : (
          switchButtonByStatus(status)
        )
      }
    </div>
  );
};

export default LogButtons;
