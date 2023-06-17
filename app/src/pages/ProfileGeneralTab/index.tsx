import { Dashboard } from '@components/templates/Dashboard';
import { useProfileGeneralTabDashboard } from './hooks/useProfileGeneralTabDashboard';

const ProfileGeneralTab = () => {
  return <Dashboard {...useProfileGeneralTabDashboard()} />;
};

export default ProfileGeneralTab;
