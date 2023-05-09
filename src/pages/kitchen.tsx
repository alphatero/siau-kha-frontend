import { BaseLayout } from '@/components/layouts';
import Page from '@/apps/Kitchen';

Page.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Page;
