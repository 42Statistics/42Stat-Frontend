import {
  BeginAt,
  BlackholedAt,
  Character,
  CoalitionScore,
  DailyActivities,
  LastPassed,
  LastRegistered,
  Wallet,
} from '@/Profile/dashboard-contents/General';
import type { DashboardItemProps } from '@shared/types/Dashboard';

export const profileGeneralPageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: BeginAt,
  },
  {
    id: 1,
    content: LastPassed,
  },
  {
    id: 3,
    content: LastRegistered,
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
];
