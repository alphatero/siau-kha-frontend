import { post } from '@/utils/axios';

type DataType = {
  orderId: string;
  promotionId: string;
}

export const postPromotion = async (data: DataType) => {
  const { orderId, promotionId } = data;

  await post(`/order/${orderId}/${promotionId}`);

  return {
    status: 'success',
  };
};

export default postPromotion;
