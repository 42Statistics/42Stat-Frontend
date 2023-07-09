import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@routes/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthGuard = () => {
  const { auth, loading } = useAuth();

  if (loading) return null;

  return auth ? <Navigate to={ROUTES.HOME} /> : <Outlet />;
};
