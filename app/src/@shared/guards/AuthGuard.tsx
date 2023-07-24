import { ROUTES } from '@shared/constants/ROUTES';
import { useAuth } from '@shared/guards/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
