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
  CurrMonthBlackholedCnt,
  CurrRegisteredCntRank,
  CurrWeekEvalCnt,
  LastExamResult,
  ProjectInfo,
  TotalEvalCnt,
  UserCntPerLevels,
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
    title: '역대 총 평가 횟수',
    content: TotalEvalCnt,
  },
  {
    id: 4,
    title: '평균 피드백 길이',
    content: AverageFeedbackLength,
  },
  {
    id: 5,
    title: '활성화 유저 수 추이',
    content: ActiveUserCntRecords,
  },
  {
    id: 6,
    title: '언제 블랙홀에 많이 빠질까?',
    content: BlackholedCntPerCircles,
  },
  {
    id: 7,
    title: 'N서클 통과할 때까지의 누적 기간',
    description: '(본과정 시작일 기준)',
    content: AverageCircleDurations,
  },
  {
    id: 8,
    content: ProjectInfo,
  },

  {
    id: 9,
    title: '누적 코알리숑 스코어 합산',
    content: CoalitionScoreSum,
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
  {
    id: 12,
    title: '직전 회차 시험 Rank 별 통과율',
    description: '(응시 시간 : 2023.02.24.(금) 14:00)',
    content: LastExamResult,
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
        rowSpan: 2,
        colSpan: 1,
        elementId: 2,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 3,
      },
      {
        row: 2,
        col: 3,
        rowSpan: 1,
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
        colSpan: 1,
        elementId: 5,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 2,
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
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 11,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 12,
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
        rowSpan: 2,
        colSpan: 1,
        elementId: 2,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 3,
      },
      {
        row: 2,
        col: 3,
        rowSpan: 1,
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
        rowSpan: 2,
        colSpan: 1,
        elementId: 6,
      },
    ],
  },
  {
    row: 4,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 4,
        colSpan: 2,
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
        colSpan: 1,
        elementId: 7,
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
        elementId: 11,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 12,
      },
    ],
  },
];

// TODO: 이후 모바일 너비에 맞게 개편 예정
const mobileRows: MobileDashboardRowType[] = [];

// 랭킹 리더보드로 이전하면서 삭제된 요소들 임시 저장
// {
//   id: 3,
//   title: '현재 보유 평가 포인트 랭킹',
//   content: CorrectionPointRanks,
// },
// {
//   id: 4,
//   title: '현재 보유 월렛 랭킹',
//   content: WalletRanks,
// },
// {
//   id: 5,
//   title: '월간 코알리숑 스코어 기여 랭킹',
//   description: '(2023.01. / 1개월)',
//   content: MonthlyScoreRanks,
// },
