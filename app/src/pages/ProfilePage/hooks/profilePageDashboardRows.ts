import {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

export const profilePageDesktopDashboardRows: DesktopDashboardRowType[] = [
  {
    row: 2,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 3,
        elementId: 0,
      },
    ],
  },
];

export const profilePageTabletDashboardRows: TabletDashboardRowType[] = [
  {
    row: 3,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 3,
        colSpan: 2,
        elementId: 0,
      },
    ],
  },
];

export const profilePageMobileDashboardRows: MobileDashboardRowType[] = [
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
