import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { H1BoldText, VStack } from '@shared/ui-kit';
import { AccountSection } from './sections/AccountSection';
import { LinkGoogleSection } from './sections/LinkGoogleSection';

const SettingPage = () => {
  return (
    <VStack align="start" spacing="2rem">
      <H1BoldText style={{ marginLeft: '2rem' }}>설정</H1BoldText>
      <LinkGoogleSection />
      <AccountSection />
    </VStack>
  );
};

const Head = () => {
  return <Seo title="설정" />;
};

export default withHead(withFooter(SettingPage), Head);
