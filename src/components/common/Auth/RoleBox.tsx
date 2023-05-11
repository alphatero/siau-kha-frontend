import clsx from 'clsx';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { Button } from '../Button';

export const RoleBox = () => {
  const { logout, user } = useGlobalAuth();

  return (
    <div
      className={clsx(
        'absolute left-16 flex items-center space-x-4',
        'rounded-md bg-highlight p-4 shadow-md',
        'animate-scale-up',
      )}
    >
      <Button className="bg-warn/85 hover:bg-warn" onClick={() => logout()}>
        登出
      </Button>
      <h5 className="text-h5">{user.role}</h5>
    </div>
  );
};

export default RoleBox;
