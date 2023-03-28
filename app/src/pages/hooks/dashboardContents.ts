import { CurrMonthBlackholedCnt } from '@/components/elements/charts/Home/CurrMonthBlackholedCnt';
import { CurrRegisteredCntRank } from '@/components/elements/charts/Home/CurrRegisteredCntRank';
import { CurrWeekEvalCnt } from '@/components/elements/charts/Home/CurrWeekEvalCnt';
import { LastExamResult } from '@/components/elements/charts/Home/LastExamResult';
import { LevelRank } from '@/components/elements/charts/Home/LevelRank';
import { MonthlyAccessTimeRank } from '@/components/elements/charts/Home/MonthlyAccessTimeRank';
import { MonthlyExpIncrementRank } from '@/components/elements/charts/Home/MonthlyExpIncrementRank';
import { TotalEvalCntRank } from '@/components/elements/charts/Home/TotalEvalCntRank';
import { DashboardItemInfo } from '@/utils/types/Dashboard';

export const dashboardContents: DashboardItemInfo[] = [
  {
    id: 0,
    title: '주간 총 평가 횟수',
    description: '(2023.02.19 ~ 2023.02.26. / 1주)',
    element: CurrWeekEvalCnt,
  },
  {
    id: 1,
    title: '이번 달 누적 블랙홀 인원',
    description: '(2023.02.01. 시작)',
    element: CurrMonthBlackholedCnt,
  },
  {
    id: 2,
    title: '지금 가장 많은 사람이 참여하는 과제는?',
    element: CurrRegisteredCntRank,
  },
  {
    id: 3,
    title: '누적 평가 횟수 랭킹',
    description: '(라 피신 시작일 기준)',
    element: TotalEvalCntRank,
  },
  {
    id: 4,
    title: '레벨 랭킹',
    description: '(전체 기수 대상)',
    element: LevelRank,
  },
  {
    id: 5,
    title: '월간 경험치 증가량 랭킹',
    description: '(2023.01. / 1개월)',
    element: MonthlyExpIncrementRank,
  },
  {
    id: 6,
    title: '월간 출석 시간 랭킹',
    description: '(2023.01. / 1개월)',
    element: MonthlyAccessTimeRank,
  },
  {
    id: 7,
    title: '직전 회차 시험 Rank 별 통과율',
    description: '(응시 시간 : 2023.02.24.(금) 14:00)',
    element: LastExamResult,
  },
];
