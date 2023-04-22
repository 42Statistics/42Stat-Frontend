import { PropsWithChildren } from 'react';

export const Scroll = ({ children }: PropsWithChildren) => {
  return <div css={{ overflowY: 'auto', height: '100%' }}>{children}</div>;
};
