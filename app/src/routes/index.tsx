import { Navigate, useRoutes } from 'react-router-dom';
import { NotFoundPage } from '@/pages/404';
import { LoginPage } from '@/pages/Login';
import { useAtomValue } from 'jotai';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { protectedRoutes } from './protected';
// import { ErrorPage } from '@/pages/Error';

// TODO: <Route errorElement={<ErrorPage />} /> 파트 추가
export const AppRoutes = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  const commonRoutes = [
    {
      path: '/',
      element: isAuthenticated ? <Navigate to="/home" /> : <LoginPage />,
    },
  ];

  const restRoutes = [{ path: '*', element: <NotFoundPage /> }];

  const element = useRoutes([
    ...commonRoutes,
    ...protectedRoutes,
    ...restRoutes,
  ]);

  return <>{element}</>;
};
