import { ROUTES } from '@/routes/ROUTES';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  return isAuthenticated === 'true' ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.ROOT} />
  );
};
