import { Center } from '@components/common';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export const LandingLayout = () => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#212222" />
      </Helmet>
      <LandingPageLayout>
        <Center h="100vh">
          <Outlet />
        </Center>
      </LandingPageLayout>
    </>
  );
};

const LandingPageLayout = styled.main`
  background: url('/black-space.jpeg'),
    linear-gradient(142deg, #212222 0%, #000000 100%); // fallback gradient for UX
  background-size: cover;
`;
