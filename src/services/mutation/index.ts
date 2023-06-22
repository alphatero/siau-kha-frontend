import { useMutation } from '@tanstack/react-query';
import { schema } from './mutations/login';
import { patchTable } from './api/table';
import { postReservation } from './api/seat';
import { deleteOrderItem, postPromotion, postOrder } from './api/order';
import { patchCheckout, getCheckoutList } from './api/checkout';

export const useLogin = () => useMutation({ mutationFn: schema.login });
export const usePatchTable = () => useMutation({ mutationFn: patchTable });
export const usePostReservation = () => useMutation({ mutationFn: postReservation });
export const useDeleteOrderItem = () => useMutation({ mutationFn: deleteOrderItem });
export const usePostPromotion = () => useMutation({ mutationFn: postPromotion });
export const usePostOrder = () => useMutation({ mutationFn: postOrder });
export const usePatchCheckout = () => useMutation({ mutationFn: patchCheckout });
export const useGetCheckoutList = () => useMutation({ mutationFn: getCheckoutList });

export default useLogin;
