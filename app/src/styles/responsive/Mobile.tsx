import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return { isMobile };
};

export const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile ? children : null}</>;
};
