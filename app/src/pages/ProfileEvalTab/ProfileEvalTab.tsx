import { Dashboard } from '@components/templates/Dashboard';
import { useProfileEvalTabDashboard } from './hooks';

const ProfileEvalTab = () => {
  return <Dashboard {...useProfileEvalTabDashboard()} />;
};

export default ProfileEvalTab;
