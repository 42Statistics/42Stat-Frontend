import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { TitleBoldText, VStack } from '@shared/ui-kit';
import { AccountSection } from './sections/AccountSection';
import { LinkGoogleSection } from './sections/LinkGoogleSection';

const SettingPage = () => {
  return (
    <VStack w="100%" align="start" spacing="3rem">
      <TitleBoldText style={{ marginLeft: '2rem' }}>설정</TitleBoldText>
      <VStack w="100%" align="start" spacing="1rem">
        <LinkGoogleSection />
        <AccountSection />
      </VStack>
    </VStack>
  );
};

const Head = () => {
  return <Seo title="설정" />;
};

export default withHead(withFooter(SettingPage), Head);
