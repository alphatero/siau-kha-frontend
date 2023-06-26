import { post, del, patch } from '@/utils/axios';
import { ProductDetailType } from '@/types/order';

export const deleteOrderItem = async (data: {
  orderId: string;
  detailId: string;
  productId: string;
}) => {
  const { orderId, detailId, productId } = data;

  const res = await del(`/order-detail/${orderId}/${detailId}/${productId}`);

  if (res.status === 200) {
    return {
      status: 'success',
    };
  }

  return {
    status: 'error',
  };
};

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

export const patchOrderItemFinish = async (data: {
  orderId: string;
  detailId: string;
  productId: string;
}) => {
  const { orderId, detailId, productId } = data;

  const res = await patch('/order-detail/product-detail/finish', {
    order_id: orderId,
    detail_id: detailId,
    p_id: productId,
  });

  if (res.status === 200) {
    return {
      status: 'success',
    };
  }

  return {
    status: 'error',
  };
};

export default postPromotion;
