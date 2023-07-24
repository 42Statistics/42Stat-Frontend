import { Dashboard } from '@shared/components/Dashboard';
import { useProfileGeneralTabDashboard } from './hooks/useProfileGeneralTabDashboard';

const ProfileGeneralTab = () => {
  return <Dashboard {...useProfileGeneralTabDashboard()} />;
};

export default ProfileGeneralTab;
