import { VStack } from '@components/common';
import { MobileHeader } from '@components/elements/Header/Mobile';
import { IntraLink } from '@components/elements/IntraLink';
import { TabBar } from '@components/elements/NavBar/Mobile(TabBar)';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export const MobileMainLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme.colors.background} />
      </Helmet>
      <IntraLink />
      <VStack w="100%">
        <MobileMainPageLayout>
          <MobileHeader />
          <Outlet />
        </MobileMainPageLayout>
      </VStack>
      <TabBar />
    </>
  );
};

const MobileMainPageLayout = styled.main`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  padding: 2rem;
  padding-bottom: calc(2rem + 6rem);
`;
