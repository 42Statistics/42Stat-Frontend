import { DashboardItemProps } from '@/utils/types/Dashboard';
import {
  AverageDuration,
  AverageFeedbackLength,
  AverageFinalMark,
  MonthlyEvalCnt,
} from '../contents';

export const dashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    title: '월간 평가 횟수',
    description: '(평가자일 때만 / 2023.01. / 1개월)',
    content: MonthlyEvalCnt,
  },
  {
    id: 1,
    title: '평균 평가 시간',
    description: '(평가자일 때만)',
    content: AverageDuration,
  },
  {
    id: 2,
    title: '평균 평가 점수',
    description: '(평가자일 때만)',
    content: AverageFinalMark,
  },
  {
    id: 3,
    title: '평균 피드백 길이',
    description: '(평가자, 피평가자 포함)',
    content: AverageFeedbackLength,
  },
];
