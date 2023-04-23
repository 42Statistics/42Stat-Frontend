import { Dashboard } from '@/components/templates/Dashboard';
import { useProfileGeneralPageDashboard } from './hooks';

export const ProfileGeneralPage = () => {
  return <Dashboard {...useProfileGeneralPageDashboard()} />;
};
