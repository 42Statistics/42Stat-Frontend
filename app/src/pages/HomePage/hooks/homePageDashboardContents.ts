import type { DashboardItemProps } from '@/types/Dashboard';
import {
  MonthlyTigCountPerCoalition,
  ScoreRecordsPerCoalition,
  TotalScoresPerCoalition,
} from '../contents/Coalition';
import {
  AverageCommentLength,
  AverageFeedbackLength,
  TotalEvalCount,
  WeeklyAverageEvalCount,
} from '../contents/Eval';
import { CurrRegisteredCountRanking, RecentExamResult } from '../contents/Team';
import {
  AliveUserCountRecords,
  AverageDurationPerCircle,
  BlackholedCountPerCircle,
  BlackholedRate,
  CorrectionPointRanking,
  Hero,
  MemberRate,
  MonthlyBlackholedCount,
  UserCountPerLevel,
  WalletRanking,
  WeeklyEvalCount,
} from '../contents/User';

export const homePageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: Hero,
  },
  {
    id: 1,
    content: WeeklyEvalCount,
  },
  {
    id: 2,
    content: MonthlyBlackholedCount,
  },
  {
    id: 3,
    content: WeeklyAverageEvalCount,
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
    content: AliveUserCountRecords,
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
    content: RecentExamResult,
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
    content: MonthlyTigCountPerCoalition,
  },
];
