import { Header } from '@/components/elements/Header';
import { Sidebar } from '@/components/elements/Sidebar';
import { Divider } from '@/styles/components';
import { HStack, VStack } from '@/styles/components/Stack';
import { Desktop, Mobile } from '@/styles/responsive';
import { Outlet } from 'react-router-dom';
import { TabBar } from '../elements/TabBar';

export const DashboardLayout = () => {
  return (
    <>
      <Desktop>
        <HStack h="100%">
          <Sidebar />
          <VStack w="100%" h="100%">
            <Header />
            <main css={{ height: '100%' }}>
              <Outlet />
            </main>
          </VStack>
        </HStack>
      </Desktop>
      <Mobile>
        <VStack w="100%" spacing={20}>
          <Header />
          <Divider />
          <main css={{ height: '100%' }}>
            <Outlet />
          </main>
          <TabBar />
        </VStack>
      </Mobile>
    </>
  );
};
