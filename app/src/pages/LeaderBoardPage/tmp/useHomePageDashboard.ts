// import {
//   DesktopDashboardRowType,
//   MobileDashboardRowType,
//   TabletDashboardRowType,
// } from '@/utils/types/Dashboard';

// import { DashboardItemProps } from '@/utils/types/Dashboard';
// import {
//   CurrMonthBlackholedCnt,
//   CurrRegisteredCntRank,
//   CurrWeekEvalCnt,
//   LastExamResult,
//   LevelRank,
//   MonthlyAccessTimeRank,
//   MonthlyExpIncrementRank,
//   TotalEvalCntRank,
// } from '../contents';

// export const useHomePageDashboard = () => ({
//   contents,
//   desktopRows,
//   tabletRows,
//   mobileRows,
// });

// const contents: DashboardItemProps[] = [
//   {
//     id: 0,
//     title: '주간 총 평가 횟수',
//     description: '(2023.02.19 ~ 2023.02.26. / 1주)',
//     content: CurrWeekEvalCnt,
//   },
//   {
//     id: 1,
//     title: '이번 달 누적 블랙홀 인원',
//     description: '(2023.02.01. 시작)',
//     content: CurrMonthBlackholedCnt,
//   },
//   {
//     id: 2,
//     title: '지금 가장 많은 사람이 참여하는 과제는?',
//     content: CurrRegisteredCntRank,
//   },
//   {
//     id: 3,
//     title: '누적 평가 횟수 랭킹',
//     description: '(라 피신 시작일 기준)',
//     content: TotalEvalCntRank,
//   },
//   {
//     id: 4,
//     title: '레벨 랭킹',
//     description: '(전체 기수 대상)',
//     content: LevelRank,
//   },
//   {
//     id: 5,
//     title: '월간 경험치 증가량 랭킹',
//     description: '(2023.01. / 1개월)',
//     content: MonthlyExpIncrementRank,
//   },
//   {
//     id: 6,
//     title: '월간 출석 시간 랭킹',
//     description: '(2023.01. / 1개월)',
//     content: MonthlyAccessTimeRank,
//   },

// ];

// const desktopRows: DesktopDashboardRowType[] = [
//   {
//     row: 2,
//     col: 4,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 1,
//         colSpan: 1,
//         elementId: 0,
//       },
//       {
//         row: 2,
//         col: 1,
//         rowSpan: 1,
//         colSpan: 1,
//         elementId: 1,
//       },
//       {
//         row: 1,
//         col: 2,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 2,
//       },
//       {
//         row: 1,
//         col: 3,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 3,
//       },
//       {
//         row: 1,
//         col: 4,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 4,
//       },
//     ],
//   },
//   {
//     row: 2,
//     col: 3,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 5,
//       },
//       {
//         row: 1,
//         col: 2,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 6,
//       },
//       {
//         row: 1,
//         col: 3,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 7,
//       },
//     ],
//   },
// ];

// const tabletRows: TabletDashboardRowType[] = [
//   {
//     row: 2,
//     col: 3,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 1,
//         colSpan: 1,
//         elementId: 0,
//       },
//       {
//         row: 2,
//         col: 1,
//         rowSpan: 1,
//         colSpan: 1,
//         elementId: 1,
//       },
//       {
//         row: 1,
//         col: 2,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 2,
//       },
//       {
//         row: 1,
//         col: 3,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 3,
//       },
//     ],
//   },
//   {
//     row: 2,
//     col: 3,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 4,
//       },
//       {
//         row: 1,
//         col: 2,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 5,
//       },
//       {
//         row: 1,
//         col: 3,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 6,
//       },
//     ],
//   },
//   {
//     row: 2,
//     col: 2,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 7,
//       },
//     ],
//   },
// ];

// const mobileRows: MobileDashboardRowType[] = [
//   {
//     row: 1,
//     col: 2,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 1,
//         colSpan: 1,
//         elementId: 0,
//       },
//       {
//         row: 1,
//         col: 2,
//         rowSpan: 1,
//         colSpan: 1,
//         elementId: 1,
//       },
//     ],
//   },
//   {
//     row: 2,
//     col: 2,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 2,
//       },
//       {
//         row: 1,
//         col: 2,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 3,
//       },
//     ],
//   },
//   {
//     row: 2,
//     col: 2,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 4,
//       },
//       {
//         row: 1,
//         col: 2,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 5,
//       },
//     ],
//   },
//   {
//     row: 2,
//     col: 2,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 2,
//         colSpan: 1,
//         elementId: 6,
//       },
//     ],
//   },
//   {
//     row: 1,
//     col: 1,
//     items: [
//       {
//         row: 1,
//         col: 1,
//         rowSpan: 1,
//         colSpan: 1,
//         elementId: 7,
//       },
//     ],
//   },
// ];

export {};
