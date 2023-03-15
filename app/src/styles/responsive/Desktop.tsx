import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return <>{isDesktop ? children : null}</>;
};
