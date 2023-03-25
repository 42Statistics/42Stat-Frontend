import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => useMediaQuery({ maxWidth: 767 });

export const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useIsMobile();

  return <>{isMobile ? children : null}</>;
};
