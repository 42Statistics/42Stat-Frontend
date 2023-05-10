import type { DashboardItemProps } from '@/utils/types/Dashboard';
import {
  AverageCommentLength,
  AverageDuration,
  AverageFeedbackLength,
  AverageFinalMark,
  DestinyUsers,
  Difficulty,
  MonthlyEvalCnt,
  TotalEvalCnt,
} from '../contents';

export const profileEvalTabDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: MonthlyEvalCnt,
  },
  {
    id: 1,
    content: TotalEvalCnt,
  },
  {
    id: 2,
    content: AverageDuration,
  },
  {
    id: 3,
    content: AverageFinalMark,
  },
  {
    id: 4,
    content: AverageCommentLength,
  },
  {
    id: 5,
    content: AverageFeedbackLength,
  },
  {
    id: 6,
    content: DestinyUsers,
  },
  {
    id: 7,
    content: Difficulty,
  },
];
