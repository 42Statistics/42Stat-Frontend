import { H1BoldText, VStack } from '@components/common';
import { Seo } from '@components/elements/Seo';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { AccountSection } from './AccountSection';
import { GoogleLinkSection } from './GoogleLinkSection';

const SettingPage = () => {
  return (
    <VStack align="start" spacing="2rem">
      <H1BoldText style={{ marginLeft: '2rem' }}>설정</H1BoldText>
      <GoogleLinkSection />
      <AccountSection />
    </VStack>
  );
};

const Head = () => {
  return <Seo title="설정" />;
};

export default withHead(withFooter(SettingPage), Head);
