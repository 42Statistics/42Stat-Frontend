import { DashboardItemInfo } from '@/utils/types/Dashboard';
import {
  CurrMonthBlackholedCnt,
  CurrRegisteredCntRank,
  CurrWeekEvalCnt,
  LastExamResult,
  LevelRank,
  MonthlyAccessTimeRank,
  MonthlyExpIncrementRank,
  TotalEvalCntRank,
} from '../contents';

export const dashboardContents: DashboardItemInfo[] = [
  {
    id: 0,
    title: '주간 총 평가 횟수',
    description: '(2023.02.19 ~ 2023.02.26. / 1주)',
    content: CurrWeekEvalCnt,
  },
  {
    id: 1,
    title: '이번 달 누적 블랙홀 인원',
    description: '(2023.02.01. 시작)',
    content: CurrMonthBlackholedCnt,
  },
  {
    id: 2,
    title: '지금 가장 많은 사람이 참여하는 과제는?',
    content: CurrRegisteredCntRank,
  },
  {
    id: 3,
    title: '누적 평가 횟수 랭킹',
    description: '(라 피신 시작일 기준)',
    content: TotalEvalCntRank,
  },
  {
    id: 4,
    title: '레벨 랭킹',
    description: '(전체 기수 대상)',
    content: LevelRank,
  },
  {
    id: 5,
    title: '월간 경험치 증가량 랭킹',
    description: '(2023.01. / 1개월)',
    content: MonthlyExpIncrementRank,
  },
  {
    id: 6,
    title: '월간 출석 시간 랭킹',
    description: '(2023.01. / 1개월)',
    content: MonthlyAccessTimeRank,
  },
  {
    id: 7,
    title: '직전 회차 시험 Rank 별 통과율',
    description: '(응시 시간 : 2023.02.24.(금) 14:00)',
    content: LastExamResult,
  },
];
