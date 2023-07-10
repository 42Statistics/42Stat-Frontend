import { gql } from '@/__generated__';
import { useMutation } from '@apollo/client';
import { Button } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { removeAccessToken } from '@utils/storage/accessToken';
import { removeRefreshToken } from '@utils/storage/refreshToken';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGOUT = gql(/* GraphQL */ `
  mutation Logout {
    logout
  }
`);

export const LogoutButton = () => {
  const [logout, { data }] = useMutation(LOGOUT);
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.logout) {
      removeAccessToken();
      removeRefreshToken();
      navigate(ROUTES.ROOT);
    } else {
      alert('로그아웃에 실패했습니다.'); // TODO: UI
    }
  }, [data, navigate]);

  return <Button onClick={handleClick}>로그아웃</Button>;
};
