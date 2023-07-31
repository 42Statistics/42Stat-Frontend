import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const ScrollToTop = ({ children }: PropsWithReactElementChildren) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => window.scrollTo(0, 0), [location.pathname, searchParams]);

  return <>{children}</>;
};
