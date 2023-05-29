import { ROUTES } from '@/routes/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  // const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return isAuthenticated === 'true' ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.ROOT} />
  );
};
