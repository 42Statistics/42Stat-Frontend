import { Dashboard } from '@shared/components/Dashboard';
import { useProfileGeneralTabDashboard } from '../dashboard-hooks/useProfileGeneralTabDashboard';

const ProfileGeneralTab = () => {
  return <Dashboard {...useProfileGeneralTabDashboard()} />;
};

export default ProfileGeneralTab;
