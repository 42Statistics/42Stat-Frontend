import { useAuth } from '@core/guards/hooks/useAuth';
import { ROUTES } from '@shared/constants/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const { loading, auth } = useAuth();

  if (loading) {
    return null;
  }

  return auth ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
