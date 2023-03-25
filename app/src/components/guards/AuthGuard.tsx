import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';

export const AuthGuard = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert('로그인이 필요합니다');
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};
