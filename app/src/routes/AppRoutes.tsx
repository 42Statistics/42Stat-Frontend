import { NotFoundPage } from '@/pages/ErrorPage';
import { LoginPage } from '@/pages/LoginPage';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { useAtomValue } from 'jotai';
import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protectedRoutes';

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
