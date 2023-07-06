import { ROUTES } from '@routes/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const googleauth = localStorage.getItem('googleauth');
  const ftoauth = localStorage.getItem('ftoauth');

  if (googleauth === 'true' && ftoauth !== 'true') {
    return <Navigate to={ROUTES.FTOAUTH} />;
  }
  return ftoauth === 'true' ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
