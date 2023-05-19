import { Center } from '@/components/common';
import { MobileHeader } from '@/components/elements/Header/MobileHeader';
import { IntraLink } from '@/components/elements/IntraLink';
import { TabBar } from '@/components/elements/TabBar';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

export const MobileMainLayout = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Layout>
      <Helmet>
        <meta name="theme-color" content={theme.colors.background} />
      </Helmet>
      <IntraLink />
      <MobileMainPageLayout>
        <MobileHeader />
        <Center w="100%">{children}</Center>
      </MobileMainPageLayout>
      <TabBar />
    </Layout>
  );
};

const MobileMainPageLayout = styled.main`
  width: 100%;
  padding: 3rem;
  padding-bottom: calc(3rem + 6rem);
`;

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
