import { Divider } from '@/styles/components';
import { HStack, VStack } from '@/styles/components/Stack';
import { Desktop, Mobile } from '@/styles/responsive';
import { Outlet } from 'react-router-dom';
import { DesktopHeader, MobileHeader } from '../elements/Header';
import { DesktopNavBar, MobileNavBar } from '../elements/NavBar';

export const MainLayout = () => {
  return (
    <>
      <Desktop>
        <HStack>
          <DesktopNavBar />
          <VStack w="100%" css={{ marginLeft: '26rem' }}>
            <DesktopHeader />
            <main css={{ width: '100%' }}>
              <Outlet />
            </main>
          </VStack>
        </HStack>
      </Desktop>
      <Mobile>
        <VStack w="100%" spacing="2rem">
          <MobileHeader />
          <Divider />
          <main css={{ width: '100%' }}>
            <Outlet />
          </main>
        </VStack>
        <MobileNavBar />
      </Mobile>
    </>
  );
};
