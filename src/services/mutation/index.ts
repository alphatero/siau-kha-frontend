import { useMutation } from '@tanstack/react-query';
import { schema } from './mutations/login';
import { patchTable } from './api/table';
import { deleteReservation, patchReservation, postReservation } from './api/seat';
import {
  patchOrderItem, deleteOrderItem, postPromotion, postOrder,
} from './api/order';
import { patchCheckout, getCheckoutList } from './api/checkout';

export const useLogin = () => useMutation({ mutationFn: schema.login });
export const usePatchTable = () => useMutation({ mutationFn: patchTable });
export const usePostReservation = () => useMutation({ mutationFn: postReservation });
export const usePatchOrderItem = () => useMutation({ mutationFn: patchOrderItem });
export const useDeleteOrderItem = () => useMutation({ mutationFn: deleteOrderItem });
export const usePostPromotion = () => useMutation({ mutationFn: postPromotion });
export const usePostOrder = () => useMutation({ mutationFn: postOrder });
export const usePatchCheckout = () => useMutation({ mutationFn: patchCheckout });
export const useGetCheckoutList = () => useMutation({ mutationFn: getCheckoutList });
export const usePatchReservation = () => useMutation({ mutationFn: patchReservation });
export const useDeleteReservation = () => useMutation({ mutationFn: deleteReservation });

export default useLogin;
