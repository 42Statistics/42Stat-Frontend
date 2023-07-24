import { ROUTES } from '@shared/constants/ROUTES';
import { useAuth } from '@shared/guards/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthGuard = () => {
  const auth = useAuth();

  return auth ? <Navigate to={ROUTES.HOME} /> : <Outlet />;
};
