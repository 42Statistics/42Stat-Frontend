import { DashboardSkeleton } from '@components/templates/DashboardSkeleton';
import { useHomePageDashboardSkeleton } from './hooks/useHomePageDashboardSkeleton';

export const HomePageSkeleton = () => {
  return <DashboardSkeleton {...useHomePageDashboardSkeleton()} />;
};
