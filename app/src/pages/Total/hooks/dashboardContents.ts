import { DashboardItemInfo } from '@/utils/types/Dashboard';
import { ProjectInfo } from '../contents';
import { ActiveUserCntRecords } from '../contents/ActiveUserCntRecords';
import { AverageCircleDurations } from '../contents/AverageCircleDurations';
import { AverageFeedbackLength } from '../contents/AverageFeedbackLength';
import { BlackholedCntPerCircles } from '../contents/BlackholedCntPerCircles';
import { CoalitionScoreDynamic } from '../contents/CoalitionScoreDynamic';
import { CoalitionScoreRecord } from '../contents/CoalitionScoreRecord';
import { CorrectionPointRanks } from '../contents/CorrectionPointRanks';
import { EvalCntPerPoints } from '../contents/EvalCntPerPoints';
import { MonthlyScoreRanks } from '../contents/MonthlyScoreRanks';
import { UserCntPerLevels } from '../contents/UserCntPerLevels';
import { UserCntPerPoints } from '../contents/UserCntPerPoints';
import { WalletRanks } from '../contents/WalletRanks';
import { TotalEvalCnt } from '../contents/totalEvalCnt';

export const dashboardContents: DashboardItemInfo[] = [
  {
    id: 0,
    title: '활성화 유저 수 추이',
    content: ActiveUserCntRecords,
  },
  {
    id: 1,
    title: '언제 블랙홀에 많이 빠질까?',
    content: BlackholedCntPerCircles,
  },
  {
    id: 2,
    title: '누적 코알리숑 스코어 합산',
    content: CoalitionScoreRecord,
  },
  {
    id: 3,
    title: '현재 보유 평가 포인트 랭킹',
    content: CorrectionPointRanks,
  },
  {
    id: 4,
    title: '현재 보유 월렛 랭킹',
    content: WalletRanks,
  },
  {
    id: 5,
    title: '월간 코알리숑 스코어 기여 랭킹',
    description: '(2023.01. / 1개월)',
    content: MonthlyScoreRanks,
  },
  {
    id: 6,
    title: '역대 총 평가 횟수',
    content: TotalEvalCnt,
  },
  {
    id: 7,
    title: '평균 피드백 길이',
    content: AverageFeedbackLength,
  },
  {
    id: 8,
    content: ProjectInfo,
  },
  {
    id: 9,
    title: 'N서클 통과할 때까지의 평균 기간',
    description: '(본과정 시작일 기준)',
    content: AverageCircleDurations,
  },
  {
    id: 10,
    title: '역대 코알리숑 스코어 변동 추이',
    content: CoalitionScoreDynamic,
  },
  {
    id: 11,
    title: '보유 평가 포인트 별 유저 분포',
    description: '(2023.02.01 기준)',
    content: UserCntPerPoints,
  },
  {
    id: 12,
    title: '보유 평가 포인트 별 평가 횟수',
    description: '(2023.02.01 기준 / 2023.3.1 / 1개월)',
    content: EvalCntPerPoints,
  },
  {
    id: 13,
    title: '레벨 별 유저 분포',
    description: '(2023.02.01 기준 / 2023.3.1 / 1개월)',
    content: UserCntPerLevels,
  },
];
