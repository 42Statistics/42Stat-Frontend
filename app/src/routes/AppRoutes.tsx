import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { lazyImport } from '@/utils/lazyImport';
import { useAtomValue } from 'jotai';
import { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTES } from './ROUTES';
import { protectedRoutes } from './protectedRoutes';

const { LandingPage } = lazyImport(
  () => import('@/pages/LandingPage'),
  'LandingPage',
);
const { NotFoundPage } = lazyImport(
  () => import('@/pages/ErrorPages/404'),
  'NotFoundPage',
);
const { LandingLayout } = lazyImport(
  () => import('@/components/layouts/LandingLayout'),
  'LandingLayout',
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

  return <>{element}</>;
};
