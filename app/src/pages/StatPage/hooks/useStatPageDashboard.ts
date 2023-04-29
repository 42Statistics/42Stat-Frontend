import {
  DashboardItemProps,
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

import {
  ActiveUserCntRecords,
  AverageCircleDurations,
  AverageFeedbackLength,
  BlackholedCntPerCircles,
  CoalitionScoreDynamic,
  CoalitionScoreSum,
  CorrectionPointRanks,
  MonthlyScoreRanks,
  ProjectInfo,
  TotalEvalCnt,
  UserCntPerLevels,
  WalletRanks,
} from '../contents';

export const useStatPageDashboard = () => ({
  contents,
  desktopRows,
  tabletRows,
  mobileRows,
});

const contents: DashboardItemProps[] = [
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
    content: CoalitionScoreSum,
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
    title: 'N서클 통과할 때까지의 누적 기간',
    description: '(본과정 시작일 기준 평균 기간)',
    content: AverageCircleDurations,
  },
  {
    id: 10,
    title: '역대 코알리숑 스코어 변동 추이',
    content: CoalitionScoreDynamic,
  },
  {
    id: 11,
    title: '레벨 별 유저 분포',
    content: UserCntPerLevels,
  },
];

const desktopRows: DesktopDashboardRowType[] = [
  {
    row: 2,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 0,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 1,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 2,
        colSpan: 1,
        elementId: 2,
      },
    ],
  },
  {
    row: 2,
    col: 4,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 3,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 4,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 2,
        colSpan: 1,
        elementId: 5,
      },
      {
        row: 1,
        col: 4,
        rowSpan: 1,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 2,
        col: 4,
        rowSpan: 1,
        colSpan: 1,
        elementId: 7,
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
        colSpan: 3,
        elementId: 8,
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
        elementId: 9,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 2,
        elementId: 10,
      },
    ],
  },
  {
    row: 2,
    col: 3,
    items: [
      {
        row: 1,
        col: 3,
        rowSpan: 2,
        colSpan: 1,
        elementId: 11,
      },
    ],
  },
];

const tabletRows: TabletDashboardRowType[] = [
  {
    row: 2,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 0,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 1,
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
        elementId: 2,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 9,
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
        elementId: 3,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 5,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 2,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 7,
      },
    ],
  },
  {
    row: 4,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 4,
        colSpan: 3,
        elementId: 8,
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
        colSpan: 2,
        elementId: 10,
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
        elementId: 4,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 11,
      },
    ],
  },
];

const mobileRows: MobileDashboardRowType[] = [
  {
    row: 1,
    col: 1,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 0,
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
        rowSpan: 2,
        colSpan: 1,
        elementId: 1,
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
        rowSpan: 2,
        colSpan: 1,
        elementId: 2,
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
        rowSpan: 2,
        colSpan: 1,
        elementId: 9,
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
        elementId: 3,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 4,
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
        elementId: 5,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 2,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 7,
      },
    ],
  },
  {
    row: 6,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 6,
        colSpan: 2,
        elementId: 8,
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
        elementId: 10,
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
        elementId: 11,
      },
    ],
  },
];
