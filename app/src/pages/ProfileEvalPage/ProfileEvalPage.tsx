import { Dashboard } from '@/components/templates/Dashboard';
import { useProfileEvalPageDashboard } from './hooks';

export const ProfileEvalPage = () => {
  return <Dashboard {...useProfileEvalPageDashboard()} />;
};
