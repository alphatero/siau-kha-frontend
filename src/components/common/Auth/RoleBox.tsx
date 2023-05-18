import clsx from 'clsx';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { Button } from '../Button';

export const RoleBox = ({ position }:{position: string}) => {
  const { logout, user } = useGlobalAuth();
  const [, , removeCookie] = useCookies(['user']);
  const router = useRouter();

  const logOut = () => {
    removeCookie('user', { sameSite: 'strict' });
    logout();
    router.push('/login');
  };

  return (
    <div
      className={clsx(
        'absolute bottom-8 flex items-center space-x-4',
        'rounded-md bg-white p-4 shadow-lg',
        'animate-scale-up',
        position === 'left' ? 'left-16' : 'right-20',
      )}
    >
      <Button className="bg-warn/85 hover:bg-warn" onClick={() => logOut()}>
        登出
      </Button>
      <h5 className="text-h5">{user.role}</h5>
    </div>
  );
};

export default RoleBox;
