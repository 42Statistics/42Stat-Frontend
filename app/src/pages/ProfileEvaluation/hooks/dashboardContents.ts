import { DashboardItemInfo } from '@/utils/types/Dashboard';
import { CurrMonthCnt } from '../contents';

export const dashboardContents: DashboardItemInfo[] = [
  {
    id: 0,
    title: '월간 평가 횟수',
    description: '(평가자일 때만 / 2023.01. / 1개월)',
    content: CurrMonthCnt,
  },
];
