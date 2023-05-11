import useAuthStore from '@/stores/auth';
import { useLogin } from '@/services/mutation';
import type { User } from '@/types/user';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';

export const useAuth = () => {
  const { onRoute } = useGlobalAuth();
  const { setUser, setToken } = useAuthStore();
  const { mutateAsync, isLoading } = useLogin();
  const [error, setError] = useState<boolean>(false);

  const onSubmit:SubmitHandler<User> = async (values: User) => {
    const res = await mutateAsync(values);
    if (res.status === 'success') {
      setUser({
        name: res.user.name,
        role: res.user.role,
      });

      setToken(res.user.token);
      onRoute();
    }

    if (res.status === 'error') {
      setError(true);
    }
  };

  return {
    onSubmit,
    isLoading,
    error,
  };
};

export default useAuth;
