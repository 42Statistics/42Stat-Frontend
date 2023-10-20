import { Blackhole, LevelRecords } from '@/Calculator/dashboard-contents';
import { DashboardItemProps } from '@shared/types/Dashboard';

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
