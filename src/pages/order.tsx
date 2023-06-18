import { BaseLayout } from '@/components/layouts';
import Page from '@/apps/Order';

Page.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Page;
