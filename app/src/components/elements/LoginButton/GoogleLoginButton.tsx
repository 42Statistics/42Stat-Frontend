import { GAPI_URL } from '@/constants/GAPI';
import { ROUTES } from '@/constants/ROUTES';
import { gql } from '@shared/__generated__';
import { useMutation } from '@apollo/client';
import { ReactComponent as GoogleLogo } from '@assets/logo/google-logo.svg';
import {
  FakeGoogleWrapperType,
  createFakeGoogleWrapper,
} from '@utils/createFakeGoogleWrapper';
import { setAccessToken } from '@utils/storage/accessToken';
import {
  removeGoogleCredential,
  setGoogleCredential,
} from '@utils/storage/googleCredential';
import { setRefreshToken } from '@utils/storage/refreshToken';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScript } from 'usehooks-ts';
import { LoginButton } from './LoginButton';

export const GOOGLE_LOGIN = gql(/* GraphQL */ `
  mutation googleLogin($google: GoogleLoginInput!, $ftCode: String) {
    googleLogin(google: $google, ftCode: $ftCode) {
      __typename
      ... on LoginSuccess {
        message
        accessToken
        refreshToken
        userId
      }
      ... on LoginNotLinked {
        message
      }
    }
  }
`);

export const GoogleLoginButton = () => {
  const status = useScript(GAPI_URL, { removeOnUnmount: true });
  const [login, { data, loading, error }] = useMutation(GOOGLE_LOGIN);
  const [googleButtonWrapper, setGoogleButtonWrapper] =
    useState<FakeGoogleWrapperType>();
  const navigate = useNavigate();

  useEffect(() => {
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
    if (status !== 'ready') {
      return;
    }
    const fakeGoogleWrapper = createFakeGoogleWrapper(handleClick, true);
    setGoogleButtonWrapper(fakeGoogleWrapper);
    return () => {
      fakeGoogleWrapper.remove();
    };
  }, [status, login]);

  useEffect(() => {
    if (loading || error || !data) {
      return;
    }
    if (data.googleLogin.__typename === 'LoginNotLinked') {
      navigate(ROUTES.FT_OAUTH);
      return;
    }
    const { accessToken, refreshToken } = data.googleLogin;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    removeGoogleCredential();
    navigate(ROUTES.HOME);
  }, [data, loading, error, navigate]);

  return (
    <LoginButton
      logo={<GoogleLogo width={18} height={18} />}
      text="Google 계정으로 로그인"
      onClick={() => googleButtonWrapper?.click()}
    />
  );
};
