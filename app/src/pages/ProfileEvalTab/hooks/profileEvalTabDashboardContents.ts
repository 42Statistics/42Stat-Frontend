import type { DashboardItemProps } from '@/types/Dashboard';
import {
  AverageCommentLength,
  AverageDuration,
  AverageFeedbackLength,
  AverageFinalMark,
  CorrectionPoint,
  DestinyRanking,
  EvalLogSearchLink,
  MonthlyEvalCount,
  RecentComment,
  TotalCount,
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
    content: TotalCount,
  },
  {
    id: 3,
    content: AverageDuration,
  },
  {
    id: 4,
    content: AverageFinalMark,
  },
  {
    id: 5,
    content: AverageCommentLength,
  },
  {
    id: 6,
    content: AverageFeedbackLength,
  },
  {
    id: 7,
    content: DestinyRanking,
  },
  {
    id: 8,
    content: RecentComment,
  },
  {
    id: 9,
    content: EvalLogSearchLink,
  },
];
