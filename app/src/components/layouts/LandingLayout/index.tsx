import { Center } from '@components/common';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import space_background from '@shared/assets/space-background.webp';
import { landingLayoutGlobalStyle } from '@styles/landingLayoutGlobalStyle';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export const LandingLayout = () => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#070f21" />
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
  background: url(${space_background});
  background-size: cover;
`;
