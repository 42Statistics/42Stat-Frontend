import { VStack, WhiteText } from '@/components/common';
import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
import { ROUTES } from '@/routes/ROUTES';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GoogleLoginBtn } from './GoogleLoginBtn';

export const LoginPage = () => {
  const theme = useTheme();

  // const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  // const setAccessToken = useSetAtom(accessTokenAtom);
  // const setRefreshToken = useSetAtom(refreshTokenAtom);
  // const setNeedFtOAuth = useSetAtom(needFtOAuthAtom);

  // const handleGoogleLoginSuccess = async ({
  //   clientId,
  //   credential,
  // }: CredentialResponse) => {
  //   if (!clientId || !credential) {
  //     return;
  //   }
  //   const res = await ky.post(
  //     import.meta.env.VITE_BACKEND_AUTH_URI + '/google',
  //     {
  //       json: { clientId, credential },
  //     },
  //   );
  //   const { accessToken, refreshToken, needFtOAuth } = await res.json<{
  //     accessToken: string;
  //     refreshToken: string;
  //     needFtOAuth: boolean;
  //   }>();
  //   setAccessToken(accessToken);
  //   setRefreshToken(refreshToken);
  // };

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <LoginPageLayout>
        <VStack h="100%" spacing="5rem">
          <Link to={ROUTES.ROOT}>
            <AppLogoTitle size="sm" color={theme.colors.mono.white} />
          </Link>
          <WhiteText>
            42Stat은 42서울의 교육생들을 위한 통계 서비스입니다.
          </WhiteText>
          <GoogleLoginBtn />
        </VStack>
      </LoginPageLayout>
    </>
  );
};

const LoginPageLayout = styled.div`
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 10rem 5rem;
  border-radius: 2rem;
`;
