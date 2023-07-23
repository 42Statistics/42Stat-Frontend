import { Dashboard } from '@components/templates/Dashboard';
import { useProfileVersusTabDashboard } from './hooks/useProfileVersusTabDashboard';

const ProfileVersusTab = () => {
  return <Dashboard {...useProfileVersusTabDashboard()} />;
};

export default ProfileVersusTab;
