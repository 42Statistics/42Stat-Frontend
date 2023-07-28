import type { DashboardItemProps } from '@shared/types/Dashboard';
import {
  MonthlyTigCountPerCoalition,
  ScoreRecordsPerCoalition,
  TotalScoresPerCoalition,
} from '../dashboard-contents/Coalition';
import {
  AverageCommentLength,
  AverageFeedbackLength,
  TotalEvalCount,
  WeeklyAverageEvalCount,
  WeeklyEvalCount,
} from '../dashboard-contents/Eval';
import {
  CurrRegisteredCountRanking,
  RecentExamResult,
} from '../dashboard-contents/Team';
import {
  AliveUserCountRecords,
  AverageDurationPerCircle,
  BlackholedCountPerCircle,
  BlackholedRate,
  CorrectionPointRanking,
  MemberRate,
  MonthlyBlackholedCount,
  UserCountPerLevel,
  WalletRanking,
} from '../dashboard-contents/User';

export const homePageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: WeeklyEvalCount,
  },
  {
    id: 1,
    content: MonthlyBlackholedCount,
  },
  {
    id: 2,
    content: WeeklyAverageEvalCount,
  },
  {
    id: 3,
    content: TotalEvalCount,
  },
  {
    id: 4,
    content: CurrRegisteredCountRanking,
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
    content: AliveUserCountRecords,
  },
  {
    id: 8,
    content: UserCountPerLevel,
  },
  {
    id: 9,
    content: MemberRate,
  },
  {
    id: 10,
    content: BlackholedRate,
  },
  {
    id: 11,
    content: BlackholedCountPerCircle,
  },
  {
    id: 12,
    content: AverageDurationPerCircle,
  },
  {
    id: 13,
    content: CorrectionPointRanking,
  },
  {
    id: 14,
    content: WalletRanking,
  },
  {
    id: 15,
    content: RecentExamResult,
  },
  {
    id: 16,
    content: ScoreRecordsPerCoalition,
  },
  {
    id: 17,
    content: TotalScoresPerCoalition,
  },
  {
    id: 18,
    content: MonthlyTigCountPerCoalition,
  },
];
