import { Footer } from '@core/components/Footer';

import { Seo } from '@shared/components/Seo';
import { HStack, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { Hero } from '@shared/components/Hero';

import { Sidebar } from '@/Feed/components/Sidebar';
import { FeedPageBody } from '@/Feed/components/FeedPageBody';

const FeedPage = () => {
  const device = useDeviceType();

  return (
    <>
      <Seo title="피드" />
      <HStack w="100%" align="start" spacing="4rem">
        <VStack w="100%" spacing="4rem">
          <Hero />
          <FeedPageBody />
        </VStack>
        {device === 'desktop' && <Sidebar />}
      </HStack>
      <Footer />
    </>
  );
};

export default FeedPage;
