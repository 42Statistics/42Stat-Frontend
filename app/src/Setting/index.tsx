import { Footer } from '@core/components/Footer';
import { Seo } from '@shared/components/Seo';
import { H1BoldText, VStack } from '@shared/ui-kit';
import { AccountSection } from './sections/AccountSection';
import { FeedbackSection } from './sections/FeedbackSection';
import { LinkGoogleSection } from './sections/LinkGoogleSection';

const SettingPage = () => {
  return (
    <>
      <Seo title="설정" />
      <VStack w="100%" align="start" spacing="3rem">
        <H1BoldText style={{ marginLeft: '2rem' }}>설정</H1BoldText>
        <VStack w="100%" align="start" spacing="1rem">
          <LinkGoogleSection />
          <FeedbackSection />
          <AccountSection />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default SettingPage;
