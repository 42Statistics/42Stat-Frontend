import { ROUTES } from '@/routes/ROUTES';
import { needFtOAuthAtom } from '@/utils/atoms/needFtOAuthAtom';
import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';

export const NoFtOAuthGuard = () => {
  const needFtOAuth = useAtomValue(needFtOAuthAtom);

  return needFtOAuth === 'true' ? <Outlet /> : <Navigate to={ROUTES.ROOT} />;
};
