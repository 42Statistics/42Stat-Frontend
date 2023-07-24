import { useAuth } from '@core/guards/hooks/useAuth';
import { ROUTES } from '@shared/constants/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthGuard = () => {
  const auth = useAuth();

  return auth ? <Navigate to={ROUTES.HOME} /> : <Outlet />;
};
