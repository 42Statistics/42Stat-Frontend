import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@routes/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const { auth, loading } = useAuth();

  if (loading) return null;

  return auth ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
