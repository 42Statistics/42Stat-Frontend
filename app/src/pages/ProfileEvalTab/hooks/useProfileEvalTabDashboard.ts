import {
  DashboardItemProps,
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

import {
  AverageDuration,
  AverageFeedbackLength,
  AverageFinalMark,
  DestinyUsers,
  Difficulty,
  MonthlyEvalCnt,
  TotalEvalCnt,
} from '../contents';

export const useProfileEvalTabDashboard = () => ({
  contents,
  desktopRows,
  tabletRows,
  mobileRows,
});

const contents: DashboardItemProps[] = [
  {
    id: 0,
    title: '월간 평가 횟수',
    description: '(평가자일 때만 / 2023.01. / 1개월)',
    content: MonthlyEvalCnt,
  },
  {
    id: 1,
    title: '누적 평가 횟수',
    content: TotalEvalCnt,
  },
  {
    id: 2,
    title: '평균 평가 시간',
    description: '(평가자일 때만)',
    content: AverageDuration,
  },
  {
    id: 3,
    title: '평균 평가 점수',
    description: '(평가자일 때만)',
    content: AverageFinalMark,
  },
  {
    id: 4,
    title: '평균 피드백 길이',
    description: '(평가자일 때)',
    content: AverageFeedbackLength, // TODO: 평가자일 때 & 평가받을 때 분리
  },
  {
    id: 5,
    title: '평균 피드백 길이',
    description: '(평가받을 때)',
    content: AverageFeedbackLength, // TODO: 평가자일 때 & 평가받을 때 분리
  },
  {
    id: 6,
    title: '운명의 장난 스코어',
    description: '평가에서 가장 자주 마주친 유저 랭킹',
    content: DestinyUsers,
  },
  {
    id: 7,
    title: '이 유저를 평가자로 만난다면?',
    content: Difficulty,
  },
];

const desktopRows: DesktopDashboardRowType[] = [
  {
    row: 2,
    col: 4,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 0,
      },
      {
        row: 2,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 1,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 2,
      },
      {
        row: 2,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 3,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 4,
      },
      {
        row: 2,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 5,
      },
      {
        row: 1,
        col: 4,
        rowSpan: 2,
        colSpan: 1,
        elementId: 6,
      },
    ],
  },
  {
    row: 2,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 7,
      },
    ],
  },
];

const tabletRows: TabletDashboardRowType[] = [
  {
    row: 2,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 0,
      },
      {
        row: 2,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 1,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 2,
      },
      {
        row: 2,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 3,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 4,
      },
      {
        row: 2,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 5,
      },
    ],
  },
  {
    row: 2,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 7,
      },
    ],
  },
];

const mobileRows: MobileDashboardRowType[] = [
  {
    row: 2,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 0,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 1,
      },
      {
        row: 2,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 2,
      },
      {
        row: 2,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 3,
      },
    ],
  },
  {
    row: 1,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 4,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 5,
      },
    ],
  },
  {
    row: 2,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 6,
      },
    ],
  },
  {
    row: 1,
    col: 1,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 7,
      },
    ],
  },
];
