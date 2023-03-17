import { Header } from '@/components/elements/Header';
import { Sidebar } from '@/components/elements/Sidebar';
import { Divider } from '@/styles/components';
import { HStack, VStack } from '@/styles/components/Stack';
import { Desktop, Mobile } from '@/styles/responsive';
import { Outlet } from 'react-router-dom';
import { TabBar } from '../elements/TabBar';

export const MainLayout = () => {
  return (
    <>
      <Desktop>
        <HStack>
          <Sidebar />
          <VStack w="100%" css={{ marginLeft: '260px' }}>
            <Header />
            <main css={{ width: '100%' }}>
              <Outlet />
            </main>
          </VStack>
        </HStack>
      </Desktop>
      <Mobile>
        <VStack w="100%" spacing="20px">
          <Header />
          <Divider />
          <main css={{ width: '100%' }}>
            <Outlet />
          </main>
        </VStack>
        <TabBar />
      </Mobile>
    </>
  );
};
