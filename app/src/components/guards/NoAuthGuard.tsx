import { ROUTES } from '@routes/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const NoAuthGuard = () => {
  const ftoauth = localStorage.getItem('ftoauth');

  return ftoauth !== 'true' ? <Outlet /> : <Navigate to={ROUTES.HOME} />;
};
