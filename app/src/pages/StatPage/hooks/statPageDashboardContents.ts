import { DashboardItemProps } from '@/utils/types/Dashboard';

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

export const statPageDashboardContents: DashboardItemProps[] = [
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
    title: '평균 코멘트 길이',
    content: AverageCommentLength,
  },
  {
    id: 4,
    title: '평균 피드백 길이',
    content: AverageFeedbackLength,
  },
  {
    id: 5,
    title: '역대 총 평가 횟수',
    content: TotalEvalCnt,
  },
  {
    id: 6,
    title: '활성화 유저 수 추이',
    content: ActiveUserCntRecords,
  },
  {
    id: 7,
    title: '언제 블랙홀에 많이 빠질까?',
    content: BlackholedCntPerCircles,
  },
  {
    id: 8,
    title: 'N서클 통과할 때까지의 누적 기간',
    description: '(본과정 시작일 기준)',
    content: AverageCircleDurations,
  },
  {
    id: 9,
    content: ProjectInfo,
  },

  {
    id: 10,
    title: '누적 코알리숑 스코어 합산',
    content: CoalitionScoreSum,
  },
  {
    id: 11,
    title: '역대 코알리숑 스코어 변동 추이',
    content: CoalitionScoreDynamic,
  },
  {
    id: 12,
    title: '레벨 별 유저 분포',
    content: UserCntPerLevels,
  },
  {
    id: 13,
    title: '직전 회차 시험 Rank 별 통과율',
    description: '(응시 시간 : 2023.02.24.(금) 14:00)',
    content: LastExamResult,
  },
];
