import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';
import { Form } from './components';

const Login: NextPageWithLayout = () => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'max-w-3xl mx-auto',
      )}
    >
      <h1>登入</h1>

      <Form />
    </div>
  );
};

export default Login;
