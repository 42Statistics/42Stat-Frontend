import { HStack, VStack } from '@/components/common';
import { AboveTabletFooter } from '@/components/elements/Footer/AboveTabletFooter';
import { IntraLink } from '@/components/elements/IntraLink';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <IntraLink />
      <HStack>
        <TabletNavBar />
        <TabletMainPageLayout>
          <VStack w="100%">
            {children}
            <AboveTabletFooter />
          </VStack>
        </TabletMainPageLayout>
      </HStack>
    </Layout>
  );
};

const TabletMainPageLayout = styled.main`
  width: 100%;
  padding: 3rem;
  margin-left: 7rem;
`;

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
