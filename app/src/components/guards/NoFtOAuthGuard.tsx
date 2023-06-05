import { ROUTES } from '@routes/ROUTES';
import { Navigate, Outlet } from 'react-router-dom';

export const NoFtOAuthGuard = () => {
  // const needFtOAuth = useAtomValue(needFtOAuthAtom);
  const needFtOAuth = localStorage.getItem('needFtOAuth');

  return needFtOAuth !== 'false' ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
