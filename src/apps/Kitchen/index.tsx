import type { NextPageWithLayout } from '@/types';
import { Header, Main } from './components';

const Kitchen: NextPageWithLayout = () => (
    <div className='flex flex-1 flex-col'>
     <Header />
     <Main />
    </div>
);

export default Kitchen;
