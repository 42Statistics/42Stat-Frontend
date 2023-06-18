import type {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@utils/types/Dashboard';

export const homeHeroDesktopDashboardRows: DesktopDashboardRowType[] = [
  {
    row: 1,
    col: 4,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 4,
        elementId: 0,
      },
    ],
  },
];

export const homeHeroTabletDashboardRows: TabletDashboardRowType[] = [];

export const homeHeroMobileDashboardRows: MobileDashboardRowType[] = [];
