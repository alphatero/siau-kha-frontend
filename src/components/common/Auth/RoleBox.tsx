import clsx from 'clsx';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { Button } from '../Button';

export const RoleBox = ({ position }:{position: string}) => {
  const { signOut, user } = useGlobalAuth();

  return (
    <div
      className={clsx(
        'absolute bottom-8 flex items-center space-x-4',
        'rounded-md bg-white p-4 shadow-lg',
        'animate-scale-up',
        position === 'left' ? 'left-16' : 'right-20',
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
