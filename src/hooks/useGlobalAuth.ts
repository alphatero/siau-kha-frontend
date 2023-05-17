import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';
import { Role } from '@/types/user';
import { useCookies } from 'react-cookie';

export const useGlobalAuth = () => {
  const [cookies] = useCookies(['user']);
  const {
    user, setUser, setToken, isLoading, logout,
  } = useAuthStore();
  const router = useRouter();

  const checkPage = () => {
    const { role } = cookies.user;

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

  const checkCookies = () => {
    if (!cookies.user) {
      return router.push('/login');
    }

    setUser({
      name: cookies.user.name,
      role: cookies.user.role,
    });

    setToken(cookies.user.token);
    return router.push(checkPage());
  };

  const onRoute = async () => {
    checkCookies();
  };

  return {
    user,
    onRoute,
    isLoading,
    logout,
  };
};

export default useGlobalAuth;
