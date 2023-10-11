import { DashboardItemProps } from '@shared/types/Dashboard';
import { Blackhole, LevelRecords } from '../dashboard-contents';

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
