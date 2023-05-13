import type { FC, PropsWithChildren } from 'react';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen bg-highlight">{children}</div>
);

export default BaseLayout;
