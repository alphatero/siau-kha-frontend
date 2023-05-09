import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import type { NextPageWithLayout } from '@/types';
import { queryClient } from '@/utils/queryClient';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

// Props
type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(Props: MyAppProps) {
  const { Component, pageProps } = Props;
  const getLayout = Component.getLayout ?? ((page) => page);

  const { user, onRoute } = useAuth();

  useEffect(() => {
    onRoute();
  }, [user, onRoute]);

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
}
