import { gql } from '@/__generated__';
import { GAPI_URL } from '@/constants/GAPI';
import { useScript } from '@/hooks/useScript';
import { useMutation } from '@apollo/client';
import google_logo from '@assets/google-logo.svg';
import { Image } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { createFakeGoogleWrapper } from '@utils/createFakeGoogleWrapper';
import { setAccessToken } from '@utils/storage/accessToken';
import {
  removeGoogleCredential,
  setGoogleCredential,
} from '@utils/storage/googleCredential';
import { setRefreshToken } from '@utils/storage/refreshToken';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from './LoginButton';

export const LOGIN_GOOGLE = gql(/* GraphQL */ `
  mutation LoginGoogle($google: GoogleLoginInput!, $ftCode: String) {
    loginGoogle(google: $google, ftCode: $ftCode) {
      __typename
      ... on Success {
        message
        accessToken
        refreshToken
        userId
      }
      ... on NotLinked {
        message
      }
    }
  }
`);

export const GoogleLoginButton = () => {
  const status = useScript(GAPI_URL);
  const [login, { data, loading, error }] = useMutation(LOGIN_GOOGLE);
  const navigate = useNavigate();

  const handleClick = (
    credentialResponse: google.accounts.id.CredentialResponse,
  ) => {
    const { credential } = credentialResponse;
    setGoogleCredential(credential);
    const clientId = import.meta.env.VITE_GAPI_CLIENT_ID;
    login({
      variables: {
        google: {
          clientId,
          credential,
        },
      },
    });
  };

  useEffect(() => {
    if (loading || error || !data) {
      return;
    }
    if (data.loginGoogle.__typename === 'NotLinked') {
      navigate(ROUTES.FT_OAUTH);
      return;
    }
    const { accessToken, refreshToken } = data.loginGoogle;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    removeGoogleCredential();
    navigate(ROUTES.HOME);
  }, [data, loading, error, navigate]);

  if (status !== 'ready')
    return (
      <LoginButton
        logo={<GoogleLogo />}
        text="Google 계정으로 로그인"
        onClick={() => {
          /* pass */
        }}
        disabled
      />
    );

  const googleButtonWrapper = createFakeGoogleWrapper(handleClick);

  return (
    <LoginButton
      logo={<GoogleLogo />}
      text="Google 계정으로 로그인"
      onClick={() => googleButtonWrapper.click()}
    />
  );
};

const GoogleLogo = () => {
  return <Image src={google_logo} alt="구글 로고" width="18px" />;
};
