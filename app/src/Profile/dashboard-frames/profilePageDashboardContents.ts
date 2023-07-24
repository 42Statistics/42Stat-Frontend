import type { DashboardItemProps } from '@shared/types/Dashboard';
import { UserProfile } from '../dashboard-contents/Profile';

export const profilePageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: UserProfile,
  },
];
