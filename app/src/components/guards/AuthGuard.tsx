import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert('로그인이 필요합니다');
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};
