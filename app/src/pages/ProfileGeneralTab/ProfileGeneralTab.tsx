import { Dashboard } from '@/components/templates/Dashboard';
import { useProfileGeneralTabDashboard } from './hooks';

export const ProfileGeneralTab = () => {
  return <Dashboard {...useProfileGeneralTabDashboard()} />;
};
