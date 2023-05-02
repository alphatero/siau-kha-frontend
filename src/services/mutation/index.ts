import { useMutation } from '@tanstack/react-query';
import { mutations } from './mutations/login';

export const useLogin = () => useMutation(mutations.login());

export default useLogin;
