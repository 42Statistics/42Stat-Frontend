import { ROUTES } from '@/constants/ROUTES';
import { useAuth } from '@guards/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
