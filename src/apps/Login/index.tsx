import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { Loading } from '@/components/common';
import { Form } from './components';

const Login: NextPageWithLayout = () => {
  const { user, isLoading } = useGlobalAuth();
  if (isLoading && user.name) return <Loading />;

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'mx-auto max-w-xl',
      )}
    >
      <h1>登入</h1>

      <Form />
    </div>
  );
};

export default Login;
