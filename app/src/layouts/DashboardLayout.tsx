import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { HStack, VStack } from '@/styles/components/Stack';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <HStack h="100%">
      <Sidebar />
      <VStack w="100%" h="100%">
        <Header />
        <main css={{ height: '100%' }}>
          <Outlet />
        </main>
      </VStack>
    </HStack>
  );
};
