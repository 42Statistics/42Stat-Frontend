import { gql } from '@/__generated__';
import { useMutation } from '@apollo/client';
import { userAtom } from '@atoms/userAtom';
import { Center, Loader } from '@components/common';
import { LOGIN_GOOGLE } from '@components/elements/LoginButton';
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
  mutation LoginFt($ftCode: String!) {
    login(ftCode: $ftCode) {
      message
      accessToken
      refreshToken
      userId
    }
  }
`);

const FtOAuthRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const ftCode = searchParams.get('code');
  const [login, { data, loading, error }] = useMutation(LOGIN_FT);
  const [
    loginGoogle,
    { data: googleData, loading: googleLoading, error: googleError },
  ] = useMutation(LOGIN_GOOGLE);
  const navigate = useNavigate();

  const [mounted, setMounted] = useState<boolean>(false);
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!ftCode) {
      return;
    }
    if (!mounted) {
      return;
    }
    const credential = getGoogleCredential();
    if (credential === null) {
      login({ variables: { ftCode } });
    } else {
      const clientId = import.meta.env.VITE_GAPI_CLIENT_ID;
      loginGoogle({
        variables: {
          ftCode,
          google: {
            clientId,
            credential,
          },
        },
      });
    }
  }, [login, loginGoogle, ftCode, mounted]);

  useEffect(() => {
    if (loading || error || !data) {
      return;
    }
    const { accessToken, refreshToken } = data.login;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    navigate(ROUTES.HOME);
  }, [data, loading, error, navigate, setUser]);

  useEffect(() => {
    if (googleLoading || googleError || !googleData) {
      return;
    }
    if (googleData.loginGoogle.__typename === 'NotLinked') {
      return; // unreachable
    }
    const { accessToken, refreshToken } = googleData.loginGoogle;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    removeGoogleCredential();
    navigate(ROUTES.HOME);
  }, [googleData, googleLoading, googleError, navigate, setUser]);

  return (
    <Center>
      <Loader />
    </Center>
  );
};

export default FtOAuthRedirectPage;
