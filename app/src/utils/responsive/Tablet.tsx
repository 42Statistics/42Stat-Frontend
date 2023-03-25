import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsTablet = () =>
  useMediaQuery({ minWidth: 768, maxWidth: 1279 });

export const useIsAboveTablet = () => useMediaQuery({ minWidth: 768 });

export const Tablet = ({ children }: PropsWithChildren) => {
  const isTablet = useIsTablet();

  return <>{isTablet ? children : null}</>;
};

export const AboveTablet = ({ children }: PropsWithChildren) => {
  const isAboveTablet = useIsAboveTablet();

  return <>{isAboveTablet ? children : null}</>;
};
