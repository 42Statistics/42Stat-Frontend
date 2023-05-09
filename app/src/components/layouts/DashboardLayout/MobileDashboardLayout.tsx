import { Divider, VStack } from '@/components/common';
import { MobileHeader } from '@/components/elements/Header/MobileHeader';
import { MobileTabBar } from '@/components/elements/NavBar/MobileTabBar';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

export const MobileDashboardLayout = ({
  children,
}: React.PropsWithChildren) => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme.colors.background} />
      </Helmet>
      <Layout>
        <VStack justify="start" spacing="1.5rem">
          <MobileHeader />
          <Divider />
          <MobileDashboardPageLayout>{children}</MobileDashboardPageLayout>
        </VStack>
        <MobileTabBar />
      </Layout>
    </>
  );
};

const MobileDashboardPageLayout = styled.main`
  width: 100%;
  max-width: 480px;
  padding: 1.5rem;
`;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 3rem; // Safe Area
  padding-bottom: 6rem; // Tab Bar
`;
