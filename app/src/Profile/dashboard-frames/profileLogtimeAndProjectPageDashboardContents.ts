import type { DashboardItemProps } from '@shared/types/Dashboard';

import {
  LevelRecords,
  LogtimeRecords,
  PreferredCluster,
  PreferredTime,
  TeamInfo,
  LastPassed,
  LastRegistered,
} from '@/Profile/dashboard-contents/LogtimeAndProject';

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
    {
      id: 5,
      content: LastPassed,
    },
    {
      id: 6,
      content: LastRegistered,
    },
  ];
