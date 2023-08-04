import { profileGeneralPageDashboardContents } from '@/Profile/dashboard-frames/profileGeneralPageDashboardContents';
import { profileGeneralPageDashboardRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { useParams } from 'react-router-dom';

const ProfileGeneralPage = () => {
  return (
    <Dashboard
      contents={profileGeneralPageDashboardContents}
      rows={profileGeneralPageDashboardRows}
    />
  );
};

const Head = () => {
  const { login } = useParams() as { login: string };

  return <Seo title={`${login} › 일반`} />;
};
export default withHead(withFooter(ProfileGeneralPage), Head);
