import { ROUTES } from '@/routes/ROUTES';
import { needFtOAuthAtom } from '@/utils/atoms/needFtOAuthAtom';
import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';

export const FtOAuthGuard = () => {
  const needFtOAuth = useAtomValue(needFtOAuthAtom);

  return needFtOAuth === 'false' ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.FTOAUTH} />
  );
};
