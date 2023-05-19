import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

export const LogoutPage = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  useEffect(() => setIsAuthenticated(false), [setIsAuthenticated]);

  return <></>;
};
