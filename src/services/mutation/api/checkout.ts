import { patch, get } from '@/utils/axios';
import {
  BillDetailType, ActivityType, ResOrderDetailType, ResActivityType,
} from '@/types/checkout';

export const patchCheckout = async ({ id }:{id: string}) => {
  const res = await patch(`/check-out/${id}`);

  const { status } = res;

  if (status !== 200) {
    throw new Error('error');
  }

  return {
    status: 'success',
  };
};

const toOrderDetail = (detail: ResOrderDetailType): BillDetailType => ({
  finalPrice: detail.product_final_price,
  name: detail.product_name,
  price: detail.product_price,
  quantity: detail.product_quantity,
});

const toActivity = (activity: ResActivityType): ActivityType => ({
  name: activity.activities_name,
  chargeType: activity.charge_type,
  discountType: activity.discount_type,
  charge: activity.activity_charge,
});

export const getCheckoutList = async ({ id }:{id: string}) => {
  const res = await get(`/check-out/${id}`);

  const { data, status } = res;

  if (status !== 200) {
    throw new Error('error');
  }

  const { order } = data.data;

  const dataList: BillDetailType[] = order.order_detail?.map((detail: ResOrderDetailType) => toOrderDetail(detail));

  const activity: ActivityType = toActivity(order.activities);

  return {
    dataList,
    total: order.total,
    finalTotal: order.final_total,
    serviceCharge: order.service_charge,
    activity,
  };
};

export default patchCheckout;
