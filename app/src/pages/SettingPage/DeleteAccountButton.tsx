import { gql } from '@/__generated__';
import { useMutation } from '@apollo/client';
import { Button } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { removeAccessToken } from '@utils/storage/accessToken';
import { removeGoogleCredential } from '@utils/storage/googleCredential';
import { removeRefreshToken } from '@utils/storage/refreshToken';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DELETE_ACCOUNT = gql(/* GraphQL */ `
  mutation DeleteAccount {
    deleteAccount
  }
`);

export const DeleteAccountButton = () => {
  const [deleteAccount, { data }] = useMutation(DELETE_ACCOUNT);
  const navigate = useNavigate();

  const handleClick = () => {
    deleteAccount();
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);
    if (data.deleteAccount) {
      removeAccessToken();
      removeRefreshToken();
      removeGoogleCredential();
      navigate(ROUTES.ROOT);
    } else {
      alert('계정 삭제에 실패했습니다.'); // TODO: UI
    }
  }, [data, navigate]);

  return <Button onClick={handleClick}>계정 삭제</Button>;
};
