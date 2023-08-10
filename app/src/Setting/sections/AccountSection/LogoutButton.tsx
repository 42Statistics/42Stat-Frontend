import { useMutation } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { ROUTES } from '@shared/constants/ROUTES';
import { Button } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGOUT = gql(/* GraphQL */ `
  mutation Logout {
    logout
  }
`);

export const LogoutButton = () => {
  const [logout, { called, loading }] = useMutation(LOGOUT);
  const navigate = useNavigate();

  useEffect(() => {
    if (!called) {
      return;
    }
    if (loading) {
      return;
    }

    // 실패해도 ROOT로 이동
    clearStorage();
    navigate(ROUTES.ROOT);
  }, [called, loading, navigate]);

  return <Button onClick={() => logout()}>로그아웃</Button>;
};
