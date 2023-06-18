import type {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@utils/types/Dashboard';

export const homeEtcDesktopDashboardRows: DesktopDashboardRowType[] = [
  {
    row: 2,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 16,
      },
    ],
  },
];

export const homeEtcTabletDashboardRows: TabletDashboardRowType[] = [];

export const homeEtcMobileDashboardRows: MobileDashboardRowType[] = [];
