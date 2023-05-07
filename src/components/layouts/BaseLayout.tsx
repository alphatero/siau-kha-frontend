import type { FC, PropsWithChildren } from 'react';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex min-h-screen'>{children}</div>
);

export default BaseLayout;
