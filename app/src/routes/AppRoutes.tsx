import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { useAtomValue } from 'jotai';
import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTES } from './ROUTES';
import { protectedRoutes } from './protectedRoutes';

const LandingPage = lazy(() =>
  import('@/pages/LandingPage').then((module) => ({
    default: module.LandingPage,
  })),
);
const NotFoundPage = lazy(() =>
  import('@/pages/ErrorPages/404').then((module) => ({
    default: module.NotFoundPage,
  })),
);
const LandingLayout = lazy(() =>
  import('@/components/layouts/LandingLayout').then((module) => ({
    default: module.LandingLayout,
  })),
);

export const AppRoutes = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  const commonRoutes = [
    {
      path: ROUTES.ROOT,
      element: isAuthenticated ? (
        <Navigate to={ROUTES.HOME} />
      ) : (
        <Suspense>
          <LandingLayout>
            <LandingPage />
          </LandingLayout>
        </Suspense>
      ),
    },
  ];
  const restRoutes = [
    {
      path: '*',
      element: (
        <Suspense>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ];
  const element = useRoutes([
    ...commonRoutes,
    ...protectedRoutes,
    ...restRoutes,
  ]);

  return element;
};
