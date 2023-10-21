import {
  MonthlyTigCountPerCoalition,
  ScoreRecordsPerCoalition,
  TotalScoresPerCoalition,
  WinCountPerCoalition,
} from '@/Home/dashboard-contents/Coalition';
import {
  AverageCommentLength,
  AverageFeedbackLength,
  EvalCountRecords,
  TotalEvalCount,
} from '@/Home/dashboard-contents/Eval';
import {
  CurrRegisteredCountRanking,
  RecentExamResult,
  TeamCloseRecords,
} from '@/Home/dashboard-contents/Team';
import {
  AliveUserCountRecords,
  AverageDurationPerCircle,
  BlackholedCountPerCircle,
  BlackholedCountRecords,
  BlackholedRate,
  CorrectionPointRanking,
  MemberRate,
  UserCountPerLevel,
  WalletRanking,
} from '@/Home/dashboard-contents/User';
import type { DashboardItemProps } from '@shared/types/Dashboard';

export const homePageDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: EvalCountRecords,
  },
  {
    id: 1,
    content: BlackholedCountRecords,
  },
  {
    id: 2,
    content: TeamCloseRecords,
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
    content: WinCountPerCoalition,
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
