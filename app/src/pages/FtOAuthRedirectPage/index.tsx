import { useMutation } from '@apollo/client';
import { userAtom } from '@atoms/userAtom';
import { Center, Loader } from '@components/common';
import { GOOGLE_LOGIN } from '@components/elements/LoginButton';
import { gql } from '@shared/__generated__';
import { ROUTES } from '@shared/constants/ROUTES';
import { setAccessToken } from '@utils/storage/accessToken';
import {
  getGoogleCredential,
  removeGoogleCredential,
} from '@utils/storage/googleCredential';
import { setRefreshToken } from '@utils/storage/refreshToken';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FT_LOGIN = gql(/* GraphQL */ `
  mutation ftLogin($ftCode: String!) {
    ftLogin(ftCode: $ftCode) {
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
  const [ftLogin, { data: ftData, loading: ftLoading, error: ftError }] =
    useMutation(FT_LOGIN);
  const [
    googleLogin,
    { data: googleData, loading: googleLoading, error: googleError },
  ] = useMutation(GOOGLE_LOGIN);
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
      ftLogin({ variables: { ftCode } });
    } else {
      const clientId = import.meta.env.VITE_GAPI_CLIENT_ID;
      googleLogin({
        variables: {
          ftCode,
          google: {
            clientId,
            credential,
          },
        },
      });
    }
  }, [ftLogin, googleLogin, ftCode, mounted]);

  useEffect(() => {
    if (ftLoading || ftError || !ftData) {
      return;
    }
    const { accessToken, refreshToken } = ftData.ftLogin;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    navigate(ROUTES.HOME);
  }, [ftData, ftLoading, ftError, navigate, setUser]);

  useEffect(() => {
    if (googleLoading || googleError || !googleData) {
      return;
    }
    if (googleData.googleLogin.__typename === 'LoginNotLinked') {
      return; // unreachable
    }
    const { accessToken, refreshToken } = googleData.googleLogin;
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
