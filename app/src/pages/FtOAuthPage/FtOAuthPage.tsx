import { VStack, WhiteText } from '@/components/common';
import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
import { ROUTES } from '@/routes/ROUTES';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FtOAuthLoginBtn } from './FtOAuthLoginBtn';

export const FtOAuthPage = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <FtOAuthPageLayout>
        <VStack h="100%" spacing="5rem">
          <Link to={ROUTES.ROOT}>
            <AppLogoTitle size="sm" color={theme.colors.mono.white} />
          </Link>
          <WhiteText>
            접속하기 위해서는 가입 후 최초 1회 42 인증이 필요합니다.
          </WhiteText>
          <FtOAuthLoginBtn />
        </VStack>
      </FtOAuthPageLayout>
    </>
  );
};

const FtOAuthPageLayout = styled.div`
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 10rem 5rem;
  border-radius: 2rem;
`;
