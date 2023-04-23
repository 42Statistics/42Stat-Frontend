import {
  DashboardItemProps,
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

import {
  LastPass,
  LastRegistered,
  LevelGraph,
  LogtimeInfo,
  PrefferedCluster,
  PrefferedTime,
  SimilarCharacter,
  TeamInfo,
} from '../contents';

export const useProfileGeneralPageDashboard = () => ({
  contents,
  desktopRows,
  tabletRows,
  mobileRows,
});

const contents: DashboardItemProps[] = [
  {
    id: 0,
    title: '최근 통과한 과제',
    content: LastPass,
  },
  {
    id: 1,
    title: '최근 신청한 과제',
    content: LastRegistered,
  },
  {
    id: 2,
    title: '월간 출석 시간',
    description: '(2023.01. / 1개월)',
    content: LogtimeInfo,
  },
  {
    id: 3,
    title: '주 접속 클러스터',
    description: '(2023.01. / 1개월)',
    content: PrefferedCluster,
  },
  {
    id: 4,
    title: '주 접속 시간대',
    description: '(2023.01. / 1개월)',
    content: PrefferedTime,
  },
  {
    id: 5,
    content: TeamInfo,
  },
  {
    id: 6,
    title: '이 유저를 캐릭터로 표현한다면?',
    description: '(과제 점수, 레벨 증가 속도, 접속 시간, 평가 횟수 기준)',
    content: SimilarCharacter,
  },
  {
    id: 7,
    title: '레벨 증가 그래프',
    description: '(2023.03.01. 기준 / 과거 1년)',
    content: LevelGraph,
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
        rowSpan: 2,
        colSpan: 1,
        elementId: 4,
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
        elementId: 5,
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
        elementId: 6,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 2,
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
        colSpan: 3,
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
    row: 2,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 2,
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
        elementId: 5,
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
