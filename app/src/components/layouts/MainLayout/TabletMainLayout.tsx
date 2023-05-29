import { HStack, VStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const TabletMainLayout = () => {
  return (
    <>
      <IntraLink />
      <HStack>
        <TabletNavBar />
        <TabletMainPageLayout>
          <VStack w="100%">
            <Outlet />
          </VStack>
        </TabletMainPageLayout>
      </HStack>
    </>
  );
};

const TabletMainPageLayout = styled.main`
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  padding: 3rem;
  margin-left: 7rem;
`;
