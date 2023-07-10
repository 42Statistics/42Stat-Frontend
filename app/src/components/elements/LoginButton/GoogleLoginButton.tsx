import { gql } from '@/__generated__';
import { GAPI_URL } from '@/constants/GAPI';
import { useScript } from '@/hooks/useScript';
import { useMutation } from '@apollo/client';
import google_logo from '@assets/google-logo.svg';
import { userAtom } from '@atoms/userAtom';
import { Image } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { createFakeGoogleWrapper } from '@utils/createFakeGoogleWrapper';
import { setAccessToken } from '@utils/storage/accessToken';
import {
  removeGoogleCredential,
  setGoogleCredential,
} from '@utils/storage/googleCredential';
import { setRefreshToken } from '@utils/storage/refreshToken';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from './LoginButton';

const LOGIN_GOOGLE = gql(/* GraphQL */ `
  mutation LoginGoogle($google: GoogleLoginInput) {
    login(loginInput: { google: $google }) {
      __typename
      ... on UnauthorizedType {
        status
        message
      }
      ... on NotFoundType {
        status
        message
      }
      ... on InternalServerErrorType {
        status
        message
      }
      ... on SuccessType {
        status
        accessToken
        refreshToken
        userPreview {
          id
          login
          imgUrl
          displayname
        }
      }
    }
  }
`);

export const GoogleLoginButton = () => {
  const status = useScript(GAPI_URL);
  const [login, { data, loading, error }] = useMutation(LOGIN_GOOGLE);
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);

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
    if (data.login.__typename !== 'SuccessType') {
      console.log(data.login);
      const { status } = data.login;
      if (status === 401) {
        navigate(ROUTES.FT_OAUTH);
      }
    } else {
      const { accessToken, refreshToken, userPreview } = data.login;
      const { id, login, imgUrl, displayname } = userPreview;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      removeGoogleCredential();
      setUser({
        id,
        login,
        imgUrl,
        displayname,
      });
      navigate(ROUTES.HOME);
    }
  }, [data, loading, error, setUser, navigate]);

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
