import { Footer } from '@core/components/Footer';

import { Seo } from '@shared/components/Seo';
import { VStack } from '@shared/ui-kit';

import { MyInfo } from '@/Home/components/MyInfo';

const HomePage = () => {
  return (
    <>
      <Seo title="홈" />
      <VStack w="100%" align="start" spacing="4rem">
        <MyInfo />
      </VStack>
      <Footer />
    </>
  );
};

export default HomePage;
