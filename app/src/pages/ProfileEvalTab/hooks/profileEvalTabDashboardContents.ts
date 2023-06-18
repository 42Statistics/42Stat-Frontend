import type { DashboardItemProps } from '@utils/types/Dashboard';
import {
  AverageCommentLength,
  AverageDuration,
  AverageFeedbackLength,
  AverageFinalMark,
  CorrectionPoint,
  DestinyUsers,
  EvalLogSearchLink,
  MonthlyEvalCount,
  RecentComment,
  TotalEvalCount,
  TotalEvalTime,
} from '../contents';

export const profileEvalTabDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: CorrectionPoint,
  },
  {
    id: 1,
    content: MonthlyEvalCount,
  },
  {
    id: 2,
    content: TotalEvalCount,
  },
  {
    id: 3,
    content: TotalEvalTime,
  },
  {
    id: 4,
    content: AverageDuration,
  },
  {
    id: 5,
    content: AverageFinalMark,
  },
  {
    id: 6,
    content: AverageCommentLength,
  },
  {
    id: 7,
    content: AverageFeedbackLength,
  },
  {
    id: 8,
    content: DestinyUsers,
  },
  {
    id: 9,
    content: RecentComment,
  },
  {
    id: 10,
    content: EvalLogSearchLink,
  },
];
