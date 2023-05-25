import { MobileFooter } from '@/components/elements/Footer/MobileFooter';
import { MobileHeader } from '@/components/elements/Header/MobileHeader';
import { IntraLink } from '@/components/elements/IntraLink';
import { TabBar } from '@/components/elements/NavBar/TabBar';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export const MobileMainLayout = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Helmet>
        <meta name="theme-color" content={theme.colors.background} />
      </Helmet>
      <IntraLink />
      <MobileMainPageLayout>
        <MobileHeader />
        <Outlet />
        <MobileFooter />
      </MobileMainPageLayout>
      <TabBar />
    </Layout>
  );
};

const MobileMainPageLayout = styled.main`
  width: 100%;
  padding: 2rem;
  padding-bottom: calc(2rem + 6rem);
`;

const Layout = styled.div`
  min-height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;
