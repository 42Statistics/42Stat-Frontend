import { useAuth } from '@guards/hooks/useAuth';
import { ROUTES } from '@routes/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthGuard = () => {
  const auth = useAuth();

  return auth ? <Navigate to={ROUTES.HOME} /> : <Outlet />;
};
