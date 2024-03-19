import { Footer } from '@core/components/Footer';

import { Seo } from '@shared/components/Seo';
import { HStack, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { MyInfo } from '@/Home/components/MyInfo';
import { Sidebar } from '@/Home/components/Sidebar';

const HomePage = () => {
  const device = useDeviceType();

  return (
    <>
      <Seo title="홈" />
      <HStack w="100%" align="start" spacing="4rem">
        <VStack w="100%" align="start" spacing="4rem">
          <MyInfo />
        </VStack>
        {device === 'desktop' && <Sidebar />}
      </HStack>
      <Footer />
    </>
  );
};

export default HomePage;
