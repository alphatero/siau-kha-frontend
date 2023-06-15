import { OrderItemType } from '@/types/order';

export const toProductDetail = (data: OrderItemType[]) => data.map((item) => {
  const { id, quantity, currentNote } = item;
  return {
    product_id: id,
    product_quantity: quantity,
    product_note: [currentNote ?? ''],
  };
});

export default toProductDetail;
