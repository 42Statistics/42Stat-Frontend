import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const AuthGuard = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert('로그인이 필요합니다');
      navigate('/');
    }
  }, []);

  return <Outlet />;
};
