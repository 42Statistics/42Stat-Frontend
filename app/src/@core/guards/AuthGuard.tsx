import { useAuth } from '@core/guards/hooks/useAuth';
import { ROUTES } from '@shared/constants/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};