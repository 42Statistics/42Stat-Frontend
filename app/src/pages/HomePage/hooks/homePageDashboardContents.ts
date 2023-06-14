import type { DashboardItemProps } from '@utils/types/Dashboard';
import {
  CoalitionScoreDynamic,
  CoalitionScoreSum,
  TigCountPerCoalition,
} from '../contents/Coalition';
import {
  AverageCommentLength,
  AverageFeedbackLength,
  CurrWeekAverageEvalCount,
  TotalEvalCount,
} from '../contents/Eval';
import { CurrRegisteredCountRank, LastExamResult } from '../contents/Team';
import {
  ActiveUserCountRecords,
  AverageCircleDurations,
  BlackholedCountPerCircles,
  BlackholedPercentage,
  CorrectionPointRanks,
  CurrMonthBlackholedCount,
  CurrWeekEvalCount,
  Hero,
  MemberPercentage,
  UserCountPerLevels,
  WalletRanks,
} from '../contents/User';

export const homePageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: Hero,
  },
  {
    id: 1,
    content: CurrWeekEvalCount,
  },
  {
    id: 2,
    content: CurrMonthBlackholedCount,
  },
  {
    id: 3,
    content: CurrWeekAverageEvalCount,
  },
  {
    id: 4,
    content: TotalEvalCount,
  },
  {
    id: 5,
    content: CurrRegisteredCountRank,
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
    content: ActiveUserCountRecords,
  },
  {
    id: 9,
    content: UserCountPerLevels,
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
    content: BlackholedCountPerCircles,
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
    content: TigCountPerCoalition,
  },
];
