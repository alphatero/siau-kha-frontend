import clsx from 'clsx';
import { Button } from '@/components/common';
import { ProductDetailStatus } from '@/types/kitchen';

type Props = {
  removeItem: () => void;
  isLoading: boolean;
  isDelete: boolean;
  status: ProductDetailStatus;
}

export const LogButtons = (props: Props) => {
  const {
    removeItem, isLoading, isDelete, status,
  } = props;

  const isDisable = status === ProductDetailStatus.SUCCESS || isLoading;

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
          </>
        )
      }
    </div>
  );
};

export default LogButtons;
