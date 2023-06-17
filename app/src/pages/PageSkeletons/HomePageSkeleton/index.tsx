import { DashboardSkeleton } from '@components/templates/DashboardSkeleton';
import { useHomePageDashboardSkeleton } from './hooks';

export const HomePageSkeleton = () => {
  return <DashboardSkeleton {...useHomePageDashboardSkeleton()} />;
};
