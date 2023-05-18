import { FC, PropsWithChildren, useEffect } from 'react';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { useCookies } from 'react-cookie';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const { onRoute } = useGlobalAuth();
  const [cookies] = useCookies(['user']);

  // onRoute();
  useEffect(() => {
    onRoute();
  }, [cookies]);

  return (
  <div className="flex min-h-screen bg-highlight">{children}</div>
  );
};

export default BaseLayout;
