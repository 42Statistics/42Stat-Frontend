import { useMutation } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { userAtom } from '@shared/atoms/userAtom';
import { GOOGLE_LOGIN } from '@shared/components/LoginButton';
import { ROUTES } from '@shared/constants/ROUTES';
import { Loader } from '@shared/ui-kit';
import { setAccessToken } from '@shared/utils/storage/accessToken';
import {
  getGoogleCredential,
  removeGoogleCredential,
} from '@shared/utils/storage/googleCredential';
import { setRefreshToken } from '@shared/utils/storage/refreshToken';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

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
    if (ftLoading) {
      return;
    }
    if (ftError) {
      navigate(ROUTES.ROOT);
      return;
    }
    if (!ftData) {
      return;
    }
    const { accessToken, refreshToken } = ftData.ftLogin;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    navigate(ROUTES.HOME);
  }, [ftData, ftLoading, ftError, navigate, setUser]);

  useEffect(() => {
    if (googleLoading) {
      return;
    }
    if (googleError) {
      const isConflict = googleError.graphQLErrors.some(
        (error) => error.extensions?.status === 409,
      );
      if (isConflict) {
        alert('이미 다른 구글 계정과 연동되어있습니다.'); // TODO: Modal
        removeGoogleCredential();
        navigate(ROUTES.ROOT);
      }
      return;
    }
    if (!googleData) {
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

  if (ftCode === null) {
    return <Navigate to={ROUTES.ROOT} />;
  }

  return <Loader />;
};

export default FtOAuthRedirectPage;
