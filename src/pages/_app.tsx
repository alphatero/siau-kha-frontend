import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
