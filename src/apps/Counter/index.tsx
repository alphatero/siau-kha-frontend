import type { NextPageWithLayout } from '@/types';
import { Auth } from '@/components/common';

const Counter: NextPageWithLayout = () => (
  <div>
    <h1>Counter</h1>
    <Auth />
  </div>
);

export default Counter;
