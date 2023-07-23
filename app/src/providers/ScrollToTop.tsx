import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = ({ children }: PropsWithReactElementChildren) => {
  const location = useLocation();

  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return <>{children}</>;
};
