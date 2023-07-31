import { profileEvalTabDashboardContents } from '@/Profile/dashboard-frames/profileEvalTabDashboardContents';
import { profileEvalTabDashboardRows } from '@/Profile/dashboard-frames/profileEvalTabDashboardRows';
import { Dashboard } from '@shared/components/Dashboard';

const ProfileEvalTab = () => {
  return (
    <Dashboard
      contents={profileEvalTabDashboardContents}
      rows={profileEvalTabDashboardRows}
    />
  );
};

export default ProfileEvalTab;
