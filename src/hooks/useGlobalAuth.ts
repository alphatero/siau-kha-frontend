import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';
import { Role } from '@/types/user';

export const useGlobalAuth = () => {
  const { user, isLoading, logout } = useAuthStore();
  const router = useRouter();

  const { role } = user;

  const checkPage = () => {
    switch (role) {
      case Role.waiter:
        return '/order';
      case Role.kitchen:
        return '/kitchen';
      case Role.manager:
        return '/admin';
      case Role.counter:
        return '/counter';
      default:
        return '/login';
    }
  };

  const onRoute = () => {
    router.push(checkPage());
  };

  return {
    user,
    onRoute,
    isLoading,
    logout,
  };
};

export default useGlobalAuth;
