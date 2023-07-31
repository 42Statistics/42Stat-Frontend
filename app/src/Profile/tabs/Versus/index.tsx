import { profileVersusTabDashboardContents } from '@/Profile/dashboard-frames/profileVersusTabDashboardContents';
import { profileVersusTabDashboardRows } from '@/Profile/dashboard-frames/profileVersusTabDashboardRows';
import { Dashboard } from '@shared/components/Dashboard';

const ProfileVersusTab = () => {
  return (
    <Dashboard
      contents={profileVersusTabDashboardContents}
      rows={profileVersusTabDashboardRows}
    />
  );
};

export default ProfileVersusTab;
