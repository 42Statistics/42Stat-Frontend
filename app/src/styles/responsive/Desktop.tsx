import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });

export const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = useIsDesktop();

  return <>{isDesktop ? children : null}</>;
};
