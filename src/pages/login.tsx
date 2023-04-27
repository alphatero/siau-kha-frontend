import { BaseLayout } from '@/components/layouts/BaseLayout';
import Page from '@/apps/Login';

Page.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Page;
