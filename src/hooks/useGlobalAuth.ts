import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';

export const useGlobalAuth = () => {
  const { user, isLoading } = useAuthStore();
  const router = useRouter();

  const { role } = user;

  const checkPage = () => {
    switch (role) {
      case 'manager':
        return '/admin';
      case 'kitchen':
        return '/kitchen';
      case 'counter':
        return '/counter';
      case 'waiter':
        return '/order';
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
  };
};

export default useGlobalAuth;