import type { DashboardItemProps } from '@shared/types/Dashboard';

import {
  BeginAt,
  BlackholedAt,
  Character,
  CoalitionScore,
  DailyActivities,
  DailyActivityDetail,
  Wallet,
} from '@/Profile/dashboard-contents/General';

export const profileGeneralPageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: BeginAt,
  },
  {
    id: 4,
    content: Wallet,
  },
  {
    id: 6,
    content: CoalitionScore,
  },
  {
    id: 7,
    content: BlackholedAt,
  },
  {
    id: 9,
    content: Character,
  },
  {
    id: 12,
    content: DailyActivities,
  },
  {
    id: 13,
    content: DailyActivityDetail,
  },
];
