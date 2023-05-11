import type { NextPageWithLayout } from '@/types';
import { Menu, Sidebar } from './components';

const Counter: NextPageWithLayout = () => (
  <div className='flex justify-between'>
    <Menu />
    <h1>Counter</h1>
    <Sidebar />
  </div>
);

export default Counter;
