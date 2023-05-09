import type { NextPageWithLayout } from '@/types';
import clsx from 'clsx';
import { Form } from './components';

const Login: NextPageWithLayout = () => (
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

export default Login;
