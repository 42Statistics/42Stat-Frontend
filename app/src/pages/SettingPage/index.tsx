import { Seo } from '@components/elements/Seo';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';

const SettingPage = () => {
  return <>설정</>;
};

const Head = () => {
  return <Seo title="설정" />;
};

export default withHead(withFooter(SettingPage), Head);
