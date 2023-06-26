import { ModalLogListDetailType } from '@/types/order';
import { useDeleteOrderItem, usePatchOrderItem } from '@/services/mutation';
import { LogButtons } from './LogButtons';
import { useStore } from '../../stores';
import { useUpdateOrderLog } from '../../hooks/useUpdateOrderLog';

export const LogItem = (props: ModalLogListDetailType & {detailId: string}) => {
  const {
    id, name, price, quantity, note, status, isDelete, detailId,
  } = props;

  const { table } = useStore();

  const { mutateAsync, isLoading } = useDeleteOrderItem();

  const {
    mutateAsync: patchMutateAsync,
    isLoading: patchIsLoading,
  } = usePatchOrderItem();

  const { refetch } = useUpdateOrderLog();

  const removeOrderItem = async (currentId: string) => {
    await mutateAsync({
      orderId: table.orderId,
      detailId,
      productId: currentId,
    });
    refetch();
  };

  const servingMeal = async (currentId: string) => {
    await patchMutateAsync({
      orderId: table.orderId,
      detailId,
      productId: currentId,
    });
    refetch();
  };

  return (
    <li className='mb-2 flex items-start justify-between'>
      <div className='flex w-full flex-col items-start'>
        <div className='flex w-full justify-between'>
          <p className='rounded-md border border-secondary px-1'>{name}</p>
          <div className='flex whitespace-nowrap'>
            <span>${price}</span>
            <div className='pl-2'>
              <span>x {quantity}</span>
              <span className='px-2'>=</span>
              <span className='text-secondary'>$ {price * quantity}</span>
            </div>
          </div>
        </div>
        <div className='flex'>
          <p>註記：</p>
          {
            (note.length === 0 || !note[0]) && (
              <span className='text-secondary'>無</span>
            )
          }
          {
            note.map((item: string, index: number) => (
              <span className='text-secondary' key={index}>{item}</span>
            ))
          }
        </div>
      </div>
      <div className='ml-4 shrink-0 grow-0 basis-[130px]'>
        <LogButtons
          removeItem={() => removeOrderItem(id)}
          serveItem={() => servingMeal(id)}
          patchIsLoading={patchIsLoading}
          isLoading={isLoading}
          isDelete={isDelete}
          status={status}
        />
      </div>
    </li>
  );
};

export default LogItem;
