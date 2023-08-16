import type { DashboardItemProps } from '@shared/types/Dashboard';
import {
  AverageCommentLength,
  AverageDuration,
  AverageFeedbackLength,
  AverageFinalMark,
  CorrectionPoint,
  CountRecords,
  DestinyRanking,
  EvalLogSearchLink,
  RecentComment,
  TotalCount,
} from '../dashboard-contents/Eval';

export const profileEvalPageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: CorrectionPoint,
  },
  {
    id: 1,
    content: CountRecords,
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
