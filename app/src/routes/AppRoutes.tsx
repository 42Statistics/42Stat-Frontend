import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { lazyImport } from '@/utils/lazyImport';
import { useAtomValue } from 'jotai';
import { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protectedRoutes';

const { LoginPage } = lazyImport(
  () => import('@/pages/LoginPage'),
  'LoginPage',
);
const { NotFoundPage } = lazyImport(
  () => import('@/pages/ErrorPages/404'),
  'NotFoundPage',
);

// TODO: <Route errorElement={<ErrorPage />} /> 파트 추가
export const AppRoutes = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  const commonRoutes = [
    {
      path: '/',
      element: isAuthenticated ? (
        <Navigate to="/home" />
      ) : (
        <Suspense>
          <LoginPage />
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
