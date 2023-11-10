import {
  LevelRecords,
  LogtimeRecords,
  PreferredCluster,
  PreferredTime,
  TeamInfo,
} from '@/Profile/dashboard-contents/LogtimeAndProject';
import type { DashboardItemProps } from '@shared/types/Dashboard';

export const profileLogtimeAndProjectPageDashboardContents: DashboardItemProps[] =
  [
    {
      id: 0,
      content: LogtimeRecords,
    },
    {
      id: 1,
      content: PreferredTime,
    },
    {
      id: 2,
      content: PreferredCluster,
    },
    {
      id: 3,
      content: TeamInfo,
    },
    {
      id: 4,
      content: LevelRecords,
    },
  ];
