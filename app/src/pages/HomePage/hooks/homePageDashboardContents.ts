import type { DashboardItemProps } from '@/utils/types/Dashboard';

import {
  ActiveUserCntRecords,
  AverageCircleDurations,
  AverageCommentLength,
  AverageFeedbackLength,
  BlackholedCntPerCircles,
  BlackholedPercentage,
  CoalitionScoreDynamic,
  CoalitionScoreSum,
  CorrectionPointRanks,
  CurrMonthBlackholedCnt,
  CurrRegisteredCntRank,
  CurrWeekAverageEvalCnt,
  CurrWeekEvalCnt,
  Hero,
  LastExamResult,
  MemberPercentage,
  TigCntPerCoalition,
  TotalEvalCnt,
  UserCntPerLevels,
  WalletRanks,
} from '../contents';

export const homePageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: Hero,
  },
  {
    id: 1,
    content: CurrWeekEvalCnt,
  },
  {
    id: 2,
    content: CurrMonthBlackholedCnt,
  },
  {
    id: 3,
    content: CurrWeekAverageEvalCnt,
  },
  {
    id: 4,
    content: TotalEvalCnt,
  },
  {
    id: 5,
    content: CurrRegisteredCntRank,
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
    content: ActiveUserCntRecords,
  },
  {
    id: 9,
    content: UserCntPerLevels,
  },
  {
    id: 10,
    content: MemberPercentage,
  },
  {
    id: 11,
    content: BlackholedPercentage,
  },
  {
    id: 12,
    content: BlackholedCntPerCircles,
  },
  {
    id: 13,
    content: AverageCircleDurations,
  },
  {
    id: 14,
    content: CorrectionPointRanks,
  },
  {
    id: 15,
    content: WalletRanks,
  },
  {
    id: 16,
    content: LastExamResult,
  },
  {
    id: 17,
    content: CoalitionScoreDynamic,
  },
  {
    id: 18,
    content: CoalitionScoreSum,
  },
  {
    id: 19,
    content: TigCntPerCoalition,
  },
];
