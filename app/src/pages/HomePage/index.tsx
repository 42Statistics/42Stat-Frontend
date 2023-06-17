import { Seo } from '@components/elements/Seo';
import { Dashboard } from '@components/templates/Dashboard';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { useHomePageDashboard } from './hooks/useHomePageDashboard';

const HomePage = () => {
  return <Dashboard {...useHomePageDashboard()} />;
};

const Head = () => {
  return <Seo title="홈" />;
};

export default withHead(withFooter(HomePage), Head);
