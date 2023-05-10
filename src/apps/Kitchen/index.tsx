import type { NextPageWithLayout } from '@/types';
import { Auth } from '@/components/common';

const Kitchen: NextPageWithLayout = () => (
  <div>
    <h1>Kitchen</h1>
    <Auth />
  </div>
);

export default Kitchen;
