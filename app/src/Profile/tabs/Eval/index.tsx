import { Dashboard } from '@shared/components/Dashboard';
import { useProfileEvalTabDashboard } from './hooks/useProfileEvalTabDashboard';

const ProfileEvalTab = () => {
  return <Dashboard {...useProfileEvalTabDashboard()} />;
};

export default ProfileEvalTab;
