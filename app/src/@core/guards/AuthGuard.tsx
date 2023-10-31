import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@core/guards/hooks/useAuth';
import { ROUTES } from '@shared/constants/routes';

export const AuthGuard = () => {
  const { loading, auth } = useAuth();

  if (loading) {
    return null;
  }

  return auth ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
