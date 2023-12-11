import { DashboardItemProps } from '@shared/types/Dashboard';

import { Blackhole, LevelRecords } from '@/Calculator/dashboard-contents';

export const calculatorPageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: Blackhole,
  },
  {
    id: 1,
    content: LevelRecords,
  },
];
