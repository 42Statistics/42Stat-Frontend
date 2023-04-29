import { Dashboard } from '@/components/templates/Dashboard';
import { useProfileEvalTabDashboard } from './hooks';

export const ProfileEvalTab = () => {
  return <Dashboard {...useProfileEvalTabDashboard()} />;
};
