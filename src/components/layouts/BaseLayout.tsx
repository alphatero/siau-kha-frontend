import { FC, PropsWithChildren, useEffect } from 'react';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { useCookies } from 'react-cookie';
import Head from 'next/head';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const { onRoute } = useGlobalAuth();
  const [cookies] = useCookies(['user']);

  // onRoute();
  useEffect(() => {
    onRoute();
  }, [cookies]);

  return (
  <div className="flex h-screen bg-highlight">
    <Head>
        <title>燒角 Siau Kha</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
    {children}
  </div>
  );
};

export default BaseLayout;
