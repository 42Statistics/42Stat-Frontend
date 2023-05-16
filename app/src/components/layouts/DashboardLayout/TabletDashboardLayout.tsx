import { Center, HStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletDashboardLayout = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <Layout>
      <IntraLink />
      <HStack w="100%">
        <TabletNavBar />
        <Center w="100%" css={{ marginLeft: '7rem' }}>
          <TabletDashboardPageLayout>{children}</TabletDashboardPageLayout>
        </Center>
      </HStack>
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
