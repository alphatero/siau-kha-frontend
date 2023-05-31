import type { NextPageWithLayout } from '@/types';
import { Modals } from './components/Modals';
import { Menu, Sidebar, Table } from './components';

const Counter: NextPageWithLayout = () => (
  <div className='flex w-full justify-between'>
    <Menu />
    <div className="col-span-2 grid flex-1 grid-cols-2 grid-rows-2 gap-6 px-6 pb-8 pt-14">

    <Table title='Table A1' isPayed={true} status='MEAL' customerNum={3} />
    {/* <Table />
    <Table />
    <Table /> */}
    </div>
    <Sidebar />

    <Modals />
  </div>
);

export default Counter;
