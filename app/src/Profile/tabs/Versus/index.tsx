import { Dashboard } from '@shared/components/Dashboard';
import { useProfileVersusTabDashboard } from './hooks/useProfileVersusTabDashboard';

const ProfileVersusTab = () => {
  return <Dashboard {...useProfileVersusTabDashboard()} />;
};

export default ProfileVersusTab;
