import { BaseLayout } from '@/components/layouts';
import Page from '@/apps/Login';

Page.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Page;
