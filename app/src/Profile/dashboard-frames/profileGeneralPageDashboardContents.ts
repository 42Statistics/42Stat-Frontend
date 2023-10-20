import {
  BeginAt,
  BlackholedAt,
  Character,
  CoalitionScore,
  LastPassed,
  LastRegistered,
  LevelRecords,
  LogtimeRecords,
  PreferredCluster,
  PreferredTime,
  TeamInfo,
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
    id: 2,
    content: LogtimeRecords,
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
    id: 5,
    content: PreferredCluster,
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
    id: 8,
    content: LevelRecords,
  },
  {
    id: 9,
    content: Character,
  },
  {
    id: 10,
    content: PreferredTime,
  },
  {
    id: 11,
    content: TeamInfo,
  },
];
