import { BaseLayout } from '@/components/layouts';
import Page from '@/apps/Admin';

Page.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Page;
