import { post } from '@/utils/axios';
import { ProductDetailType } from '@/types/order';

type OrderType = {
  orderId: string;
  productDetail: ProductDetailType[];
}

export const postOrder = async (data: OrderType) => {
  const { orderId, productDetail } = data;

  const res = await post(`/order-detail/${orderId}`, { product_detail: productDetail });

  if (res.status === 201) {
    return {
      status: 'success',
    };
  }

  return {
    status: 'error',
  };
};

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
