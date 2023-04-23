import { Dashboard } from '@/components/templates/Dashboard';
import { useProfileGeneralPageDashboard } from './hooks/useProfileGeneralPageDashboard';

export const ProfileGeneralPage = () => {
  return <Dashboard {...useProfileGeneralPageDashboard()} />;
};
