import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';
import { useLogin } from '@/services/mutation';
import type { User } from '@/types/user';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

export const useAuth = () => {
  const router = useRouter();
  const { setUser, setToken } = useAuthStore();
  const { mutateAsync, isLoading } = useLogin();
  const [error, setError] = useState<boolean>(false);

  const onRoute = (role: string) => {
    switch (role) {
      case 'manager':
        router.push('/admin');
        break;
      case 'kitchen':
        router.push('/kitchen');
        break;
      case 'counter':
        router.push('/counter');
        break;
      case 'waiter':
        router.push('/order');
        break;
      default:
        break;
    }
  };

  const onSubmit:SubmitHandler<User> = async (values: User) => {
    const res = await mutateAsync(values);
    if (res.status === 'success') {
      setUser({
        name: res.user.name,
        role: res.user.role,
      });

      setToken(res.user.token);
      onRoute(res.user.role);
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
