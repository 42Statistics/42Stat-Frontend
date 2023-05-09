import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();

  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return <>{children}</>;
};
