import { statPageDashboardContents } from './statPageDashboardContents';
import {
  statPageDesktopDashboardRows,
  statPageMobileDashboardRows,
  statPageTabletDashboardRows,
} from './statPageDashboardRows';

export const useStatPageDashboard = () => ({
  contents: statPageDashboardContents,
  desktopRows: statPageDesktopDashboardRows,
  tabletRows: statPageTabletDashboardRows,
  mobileRows: statPageMobileDashboardRows,
});

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
