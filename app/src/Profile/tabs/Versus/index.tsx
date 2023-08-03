import { profileVersusTabDashboardContents } from '@/Profile/dashboard-frames/profileVersusTabDashboardContents';
import { profileVersusTabDashboardRows } from '@/Profile/dashboard-frames/profileVersusTabDashboardRows';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { useParams } from 'react-router-dom';

const ProfileVersusTab = () => {
  return (
    <Dashboard
      contents={profileVersusTabDashboardContents}
      rows={profileVersusTabDashboardRows}
    />
  );
};

const Head = () => {
  const { login } = useParams() as { login: string };

  return <Seo title={`${login} › 나와 비교`} />;
};
export default withHead(withFooter(ProfileVersusTab), Head);
