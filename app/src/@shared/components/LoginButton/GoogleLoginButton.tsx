import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { useScript } from 'usehooks-ts';

import { gql } from '@shared/__generated__';
import { ReactComponent as GoogleLogo } from '@shared/assets/logo/google-logo.svg';
import { LoginButton } from '@shared/components/LoginButton/LoginButton';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { URL } from '@shared/constants/url';
import {
  createFakeGoogleWrapper,
  type FakeGoogleWrapperType,
} from '@shared/utils/createFakeGoogleWrapper';
import { setAccessToken } from '@shared/utils/storage/accessToken';
import {
  removeGoogleCredential,
  setGoogleCredential,
} from '@shared/utils/storage/googleCredential';
import { setRefreshToken } from '@shared/utils/storage/refreshToken';

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
  const navigate = useNavigate();
  const [login, { data, loading, error }] = useMutation(GOOGLE_LOGIN);
  const status = useScript(URL.GAPI, { removeOnUnmount: true });
  const [googleButtonWrapper, setGoogleButtonWrapper] =
    useState<FakeGoogleWrapperType>();

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
    if (loading) {
      return;
    }

    if (error) {
      removeGoogleCredential();
      return;
    }

    if (!data) {
      return;
    }
    if (data.googleLogin.__typename === 'LoginNotLinked') {
      navigate(ROUTES.FT_OAUTH_REQUEST);
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
      ariaLabel={ARIA_LABEL.BUTTON.LOGIN_WITH_GOOGLE_ACCOUNT}
      onClick={() => googleButtonWrapper?.click()}
    />
  );
};
