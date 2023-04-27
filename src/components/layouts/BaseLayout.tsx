import type { FC, PropsWithChildren } from 'react';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>;
};

export default BaseLayout;
