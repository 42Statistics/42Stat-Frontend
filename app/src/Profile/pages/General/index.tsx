import { profileGeneralTabDashboardContents } from '@/Profile/dashboard-frames/profileGeneralTabDashboardContents';
import { profileGeneralTabDashboardRows } from '@/Profile/dashboard-frames/profileGeneralTabDashboardRows';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { useParams } from 'react-router-dom';

const ProfileGeneralPage = () => {
  return (
    <Dashboard
      contents={profileGeneralTabDashboardContents}
      rows={profileGeneralTabDashboardRows}
    />
  );
};

const Head = () => {
  const { login } = useParams() as { login: string };

  return <Seo title={`${login} › 일반`} />;
};
export default withHead(withFooter(ProfileGeneralPage), Head);
