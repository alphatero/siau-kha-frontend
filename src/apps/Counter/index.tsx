import type { NextPageWithLayout } from '@/types';
import { Menu, Sidebar } from './components';
import { Modals } from './components/Modals';

const Counter: NextPageWithLayout = () => (
  <div className='flex w-full justify-between'>
    <Menu />
    <h1>Counter</h1>
    <Sidebar />

    <Modals />
  </div>
);

export default Counter;
