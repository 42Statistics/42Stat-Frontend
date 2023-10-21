import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

export const ScrollToTop = ({ children }: PropsWithReactElementChildren) => {
  // const location = useLocation();
  // const [searchParams] = useSearchParams();

  // useEffect(() => window.scrollTo(0, 0), [location.pathname, searchParams]);

  return <>{children}</>;
};
