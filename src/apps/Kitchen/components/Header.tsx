import { Auth, Logo } from '@/components/common';
import { CurrentTime } from './CurrentTime';

export const Header = () => (
  <div className='flex justify-between border-b border-black/10 bg-white px-8 py-7'>
      <Logo border={false}/>
      <h2 className='px-2 py-4 text-h5 text-black/85'><CurrentTime /></h2>
      <Auth position='right' absolute='top' />
  </div>
);

export default Header;
