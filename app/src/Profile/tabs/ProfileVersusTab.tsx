import { Dashboard } from '@shared/components/Dashboard';
import { useProfileVersusTabDashboard } from '../dashboard-hooks/useProfileVersusTabDashboard';

const ProfileVersusTab = () => {
  return <Dashboard {...useProfileVersusTabDashboard()} />;
};

export default ProfileVersusTab;
