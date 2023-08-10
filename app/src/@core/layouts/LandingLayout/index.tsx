import { Global, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import space_background from '@shared/assets/space-background.webp';
import { Center } from '@shared/ui-kit';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { landingLayoutGlobalStyle } from './landingLayoutGlobalStyle';

const LandingLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme.colors.background.landing} />
      </Helmet>
      <Global styles={landingLayoutGlobalStyle} />
      <Layout>
        <Center h="100vh">
          <Outlet />
        </Center>
      </Layout>
    </>
  );
};

const Layout = styled.main`
  width: 100%;
  background: ${({ theme }) =>
    `${theme.colors.background.landing} url(${space_background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default LandingLayout;
