import { DashboardSkeleton } from '@/components/templates/DashboardSkeleton';
import { useStatPageDashboardSkeleton } from './hooks';

export const StatPageSkeleton = () => {
  return <DashboardSkeleton {...useStatPageDashboardSkeleton()} />;
};
