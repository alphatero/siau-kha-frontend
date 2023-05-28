import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';
import { Role } from '@/types/user';
import { useCookies } from 'react-cookie';
import { useSignOut } from '@/services/query';
import { useState } from 'react';

export const useGlobalAuth = () => {
  const [cookies,, removeCookie] = useCookies(['user']);
  const [isSignOut, setIsSignOut] = useState(false);
  const {
    user, setUser, setToken, isLoading, logout,
  } = useAuthStore();
  const { data } = useSignOut(isSignOut);

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

  const signOut = () => {
    setIsSignOut(true);
    if (data) {
      removeCookie('user', { sameSite: 'strict' });
      logout();
      router.push('/login');
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
    signOut,
  };
};

export default useGlobalAuth;
