import { Divider } from '@/styles/components';
import { HStack, VStack } from '@/styles/components/Stack';
import { Desktop, Tablet, Mobile } from '@/styles/responsive';
import { Outlet } from 'react-router-dom';
import { DesktopHeader, TabletHeader, MobileHeader } from '../elements/Header';
import { DesktopNavBar, TabletNavBar, MobileNavBar } from '../elements/NavBar';

export const MainLayout = () => {
  return (
    <>
      <Desktop>
        <HStack>
          <DesktopNavBar />
          <VStack w="100%" h="100%" css={{ marginLeft: '24rem' }}>
            <DesktopHeader />
            <Outlet />
          </VStack>
        </HStack>
      </Desktop>
      <Tablet>
        <HStack>
          <TabletNavBar />
          <VStack w="100%" h="100%">
            <TabletHeader />
            <Outlet />
          </VStack>
        </HStack>
      </Tablet>
      <Mobile>
        <VStack w="100%" spacing="2rem">
          <MobileHeader />
          <Divider />
          <Outlet />
        </VStack>
        <MobileNavBar />
      </Mobile>
    </>
  );
};
