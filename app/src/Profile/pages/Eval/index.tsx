import { profileEvalPageDashboardContents } from '@/Profile/dashboard-frames/profileEvalPageDashboardContents';
import { profileEvalPageDashboardRows } from '@/Profile/dashboard-frames/profileEvalPageDashboardRows';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { useParams } from 'react-router-dom';

const ProfileEvalPage = () => {
  return (
    <Dashboard
      contents={profileEvalPageDashboardContents}
      rows={profileEvalPageDashboardRows}
    />
  );
};

const Head = () => {
  const { login } = useParams() as { login: string };

  return <Seo title={`${login} › 평가`} />;
};

export default withHead(withFooter(ProfileEvalPage), Head);
