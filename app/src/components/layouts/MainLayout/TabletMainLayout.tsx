import { HStack, VStack } from '@/components/common';
import { AboveTabletFooter } from '@/components/elements/Footer/AboveTabletFooter';
import { IntraLink } from '@/components/elements/IntraLink';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const TabletMainLayout = () => {
  return (
    <Layout>
      <IntraLink />
      <HStack>
        <TabletNavBar />
        <TabletMainPageLayout>
          <VStack w="100%">
            <Outlet />
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
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;
