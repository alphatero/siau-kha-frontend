import { BaseLayout } from '@/components/layouts';
import Page from '@/apps/Counter';

Page.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Page;
