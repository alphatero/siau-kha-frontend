import clsx from 'clsx';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { Button } from '../Button';

export const RoleBox = ({ position, absolute }:{position: string, absolute: string}) => {
  const { signOut, user } = useGlobalAuth();

  return (
    <div
      className={clsx(
        'absolute flex items-center space-x-4',
        'rounded-md bg-white p-4 shadow-lg',
        'animate-scale-up',
        position === 'left' ? 'left-16' : 'right-20',
        absolute === 'bottom' ? 'bottom-8' : 'top-14',
      )}
    >
      <Button className="bg-warn/85 hover:bg-warn" onClick={() => signOut()}>
        登出
      </Button>
      <h5 className="text-h5">{user.role}</h5>
    </div>
  );
};

export default RoleBox;
