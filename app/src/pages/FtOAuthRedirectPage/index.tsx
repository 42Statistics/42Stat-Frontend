import { gql } from '@/__generated__';
import { useMutation } from '@apollo/client';
import { userAtom } from '@atoms/userAtom';
import { Center, Loader } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { setAccessToken } from '@utils/storage/accessToken';
import {
  getGoogleCredential,
  removeGoogleCredential,
} from '@utils/storage/googleCredential';
import { setRefreshToken } from '@utils/storage/refreshToken';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LOGIN_FT = gql(/* GraphQL */ `
  mutation LoginFt($code: String!, $google: GoogleLoginInput) {
    login(loginInput: { code: $code, google: $google }) {
      __typename
      ... on Success {
        message
        accessToken
        refreshToken
        userId
      }
      ... on NoAssociated {
        message
      }
    }
  }
`);

const FtOAuthRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [login, { data, loading, error }] = useMutation(LOGIN_FT);
  const navigate = useNavigate();

  const [mounted, setMounted] = useState<boolean>(false);
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!code) {
      return;
    }
    if (!mounted) {
      return;
    }
    const credential = getGoogleCredential();
    if (credential === null) {
      login({ variables: { code } });
    } else {
      const clientId = import.meta.env.VITE_GAPI_CLIENT_ID;
      login({
        variables: {
          code,
          google: {
            clientId,
            credential,
          },
        },
      });
    }
  }, [login, code, mounted]);

  useEffect(() => {
    if (loading || error || !data) {
      return;
    }
    if (data.login.__typename !== 'Success') {
      return; // unreachable
    }
    const { accessToken, refreshToken } = data.login;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    removeGoogleCredential();
    navigate(ROUTES.HOME);
  }, [data, loading, error, navigate, setUser]);

  return (
    <Center>
      <Loader />
    </Center>
  );
};

export default FtOAuthRedirectPage;
