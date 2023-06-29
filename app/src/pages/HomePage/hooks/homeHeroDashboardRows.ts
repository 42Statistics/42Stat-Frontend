import type {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/types/Dashboard';

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

export const homeHeroTabletDashboardRows: TabletDashboardRowType[] = [
  {
    row: 1,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 3,
        elementId: 0,
      },
    ],
  },
];

export const homeHeroMobileDashboardRows: MobileDashboardRowType[] = [
  {
    row: 1,
    col: 1,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 0,
      },
    ],
  },
];
