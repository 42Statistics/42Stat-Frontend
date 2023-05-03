import { DashboardSkeleton } from '@/components/templates/DashboardSkeleton';
import { useprofilePageDashboardSkeleton } from './hooks';

export const ProfilePageSkeleton = () => {
  return <DashboardSkeleton {...useprofilePageDashboardSkeleton()} />;
};
