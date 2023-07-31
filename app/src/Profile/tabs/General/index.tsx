import { profileGeneralTabDashboardContents } from '@/Profile/dashboard-frames/profileGeneralTabDashboardContents';
import { profileGeneralTabDashboardRows } from '@/Profile/dashboard-frames/profileGeneralTabDashboardRows';
import { Dashboard } from '@shared/components/Dashboard';

const ProfileGeneralTab = () => {
  return (
    <Dashboard
      contents={profileGeneralTabDashboardContents}
      rows={profileGeneralTabDashboardRows}
    />
  );
};

export default ProfileGeneralTab;
