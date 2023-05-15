import type {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

export const profilePageDesktopDashboardRows: DesktopDashboardRowType[] = [
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

export const profilePageTabletDashboardRows: TabletDashboardRowType[] = [
  {
    row: 2,
    col: 2,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 2,
        elementId: 0,
      },
    ],
  },
];

export const profilePageMobileDashboardRows: MobileDashboardRowType[] = [
  {
    row: 2,
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
];
