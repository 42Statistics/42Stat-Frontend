import { Seo } from '@/components/elements/Seo';
import { withFooter } from '@/components/hoc/withFooter';
import { withHead } from '@/components/hoc/withHead';
import { Dashboard } from '@/components/templates/Dashboard';
import { useHomePageDashboard } from './hooks';

const HomePage = () => {
  return <Dashboard {...useHomePageDashboard()} />;
};

const Head = () => {
  return <Seo title="홈" />;
};

export default withHead(withFooter(HomePage), Head);
