import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@core/guards/hooks/useAuth';
import { ROUTES } from '@shared/constants/routes';

export const UnAuthGuard = () => {
  const { loading, auth } = useAuth();

  if (loading) {
    return null;
  }

  return auth ? <Navigate to={ROUTES.HOME} /> : <Outlet />;
};
