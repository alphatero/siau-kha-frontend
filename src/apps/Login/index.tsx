import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';
import { Form } from './components';
import { Loading } from '@/components/common/Loading';
import { useStore } from './stores';

const Login: NextPageWithLayout = () => {
  const { isLoading } = useStore();
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'max-w-3xl mx-auto',
      )}
    >
      <h1>登入</h1>

      <Form />

      {isLoading && <Loading />}
    </div>
  );
};

export default Login;
