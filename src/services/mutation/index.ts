import { useMutation } from '@tanstack/react-query';
import { schema } from './mutations/login';
import { patchTable } from './api/table';
import { patchReservation, postReservation } from './api/seat';
import { postPromotion } from './api/order';

export const useLogin = () => useMutation({ mutationFn: schema.login });
export const usePatchTable = () => useMutation({ mutationFn: patchTable });
export const usePostReservation = () => useMutation({ mutationFn: postReservation });
export const usePostPromotion = () => useMutation({ mutationFn: postPromotion });
export const usePatchReservation = () => useMutation({ mutationFn: patchReservation });

export default useLogin;
