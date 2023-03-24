import { Divider } from '@/styles/components';
import { HStack, VStack } from '@/styles/components/Stack';
import { Desktop, Tablet, Mobile } from '@/styles/responsive';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { DesktopHeader, TabletHeader, MobileHeader } from '../elements/Header';
import { DesktopNavBar, TabletNavBar, MobileNavBar } from '../elements/NavBar';

export const MainLayout = () => {
  return (
    <>
      <Desktop>
        <HStack w="100%" h="100%">
          <DesktopNavBar />
          <VStack w="100%" h="100%" css={{ marginLeft: '24rem' }}>
            <DesktopHeader />
            <PageLayout>
              <Outlet />
            </PageLayout>
          </VStack>
        </HStack>
      </Desktop>
      <Tablet>
        <HStack w="100%" h="100%">
          <TabletNavBar />
          <VStack w="100%" h="100%">
            <TabletHeader />
            <PageLayout>
              <Outlet />
            </PageLayout>
          </VStack>
        </HStack>
      </Tablet>
      <Mobile>
        <VStack w="100%" h="100%" spacing="2rem">
          <MobileHeader />
          <Divider />
          <PageLayout>
            <Outlet />
          </PageLayout>
        </VStack>
        <MobileNavBar />
      </Mobile>
    </>
  );
};

const PageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
