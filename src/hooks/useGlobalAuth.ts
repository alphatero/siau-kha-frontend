import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';
import { Role } from '@/types/user';
import { useCookies } from 'react-cookie';
import { useCheckToken } from '@/services/query';

export const useGlobalAuth = () => {
  const [cookies,, removeCookie] = useCookies(['user']);
  const {
    data, isLoading,
  } = useCheckToken(cookies.user?.token ?? '');
  const {
    user, setUser, setToken, logout,
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
    const hasExpired = data?.hasExpired;

    if (hasExpired) {
      removeCookie('user', { sameSite: 'strict' });
      return router.push('/login');
    }
    return checkCookies();
  };

  return {
    user,
    onRoute,
    isLoading,
    logout,
  };
};

export default useGlobalAuth;
