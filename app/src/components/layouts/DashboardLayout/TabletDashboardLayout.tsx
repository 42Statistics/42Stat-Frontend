import { Center } from '@/components/common';
import { TabletHamburger } from '@/components/elements/Header/TabletHamburger';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletDashboardLayout = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <Layout>
      <TabletNavBar />
      <TabletHamburger />
      <Center w="100%">
        <TabletDashboardPageLayout>{children}</TabletDashboardPageLayout>
      </Center>
    </Layout>
  );
};

const TabletDashboardPageLayout = styled.main`
  width: 100%;
  max-width: 800px;
  padding: 3rem;
`;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
