import type { DashboardItemProps } from '@utils/types/Dashboard';
import {
  ScoreRecordsPerCoalition,
  TigCountPerCoalition,
  TotalScoresPerCoalition,
} from '../contents/Coalition';
import {
  AverageCommentLength,
  AverageFeedbackLength,
  CurrWeekAverageEvalCount,
  TotalEvalCount,
} from '../contents/Eval';
import { CurrRegisteredCountRanking, LastExamResult } from '../contents/Team';
import {
  ActiveUserCountRecords,
  AverageDurationPerCircle,
  BlackholedCountPerCircle,
  BlackholedRate,
  CorrectionPointRanking,
  CurrMonthBlackholedCount,
  CurrWeekEvalCount,
  Hero,
  MemberRate,
  UserCountPerLevel,
  WalletRanking,
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
    content: CurrRegisteredCountRanking,
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
    content: UserCountPerLevel,
  },
  {
    id: 10,
    content: MemberRate,
  },
  {
    id: 11,
    content: BlackholedRate,
  },
  {
    id: 12,
    content: BlackholedCountPerCircle,
  },
  {
    id: 13,
    content: AverageDurationPerCircle,
  },
  {
    id: 14,
    content: CorrectionPointRanking,
  },
  {
    id: 15,
    content: WalletRanking,
  },
  {
    id: 16,
    content: LastExamResult,
  },
  {
    id: 17,
    content: ScoreRecordsPerCoalition,
  },
  {
    id: 18,
    content: TotalScoresPerCoalition,
  },
  {
    id: 19,
    content: TigCountPerCoalition,
  },
];
