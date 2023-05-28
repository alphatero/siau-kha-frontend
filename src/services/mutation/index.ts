import { useMutation } from '@tanstack/react-query';
import { schema } from './mutations/login';

export const useLogin = () => useMutation({ mutationFn: schema.login });

export default useLogin;
