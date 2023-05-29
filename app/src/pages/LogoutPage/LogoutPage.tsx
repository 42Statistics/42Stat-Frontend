import { withHead } from '@/components/hoc/withHead';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { needFtOAuthAtom } from '@/utils/atoms/needFtOAuthAtom';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useEffect } from 'react';

const LogoutPage = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setNeedFtOAuth = useSetAtom(needFtOAuthAtom);

  useEffect(() => {
    setIsAuthenticated(RESET);
    setNeedFtOAuth(RESET);
  }, [setIsAuthenticated, setNeedFtOAuth]);

  return <></>;
};

export default withHead(LogoutPage);
