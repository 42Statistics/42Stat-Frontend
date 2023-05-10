import type { DashboardItemProps } from '@/utils/types/Dashboard';

import {
  ActiveUserCntRecords,
  AverageCircleDurations,
  AverageCommentLength,
  AverageFeedbackLength,
  BlackholedCntPerCircles,
  CoalitionScoreDynamic,
  CoalitionScoreSum,
  CurrMonthBlackholedCnt,
  CurrRegisteredCntRank,
  CurrWeekEvalCnt,
  LastExamResult,
  ProjectInfo,
  TotalEvalCnt,
  UserCntPerLevels,
} from '../contents';

export const homePageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: CurrWeekEvalCnt,
  },
  {
    id: 1,
    content: CurrMonthBlackholedCnt,
  },
  {
    id: 2,
    content: CurrRegisteredCntRank,
  },
  {
    id: 3,
    content: AverageCommentLength,
  },
  {
    id: 4,
    content: AverageFeedbackLength,
  },
  {
    id: 5,
    content: TotalEvalCnt,
  },
  {
    id: 6,
    content: ActiveUserCntRecords,
  },
  {
    id: 7,
    content: BlackholedCntPerCircles,
  },
  {
    id: 8,
    content: AverageCircleDurations,
  },
  {
    id: 9,
    content: ProjectInfo,
  },

  {
    id: 10,
    content: CoalitionScoreSum,
  },
  {
    id: 11,
    content: CoalitionScoreDynamic,
  },
  {
    id: 12,
    content: UserCntPerLevels,
  },
  {
    id: 13,
    content: LastExamResult,
  },
];
