import type { NextPageWithLayout } from '@/types';
import { Auth } from '@/components/common';

const Admin: NextPageWithLayout = () => (
  <div>
    <h1>Admin</h1>
    <Auth position='right' />
  </div>
);

export default Admin;
