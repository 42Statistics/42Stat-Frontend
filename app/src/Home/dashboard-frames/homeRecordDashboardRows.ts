import type {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@shared/types/Dashboard';

export const homeRecordDesktopDashboardRows: DesktopDashboardRowType[] = [
  {
    row: 1,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 4,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 1,
        col: 3,
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
        colSpan: 1,
        elementId: 8,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 15,
      },
    ],
  },
];

export const homeRecordTabletDashboardRows: TabletDashboardRowType[] = [
  {
    row: 1,
    col: 3,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 4,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 1,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 7,
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
        elementId: 8,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 15,
      },
    ],
  },
];

export const homeRecordMobileDashboardRows: MobileDashboardRowType[] = [
  {
    row: 3,
    col: 1,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 4,
      },
      {
        row: 2,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 6,
      },
      {
        row: 3,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 7,
      },
    ],
  },
  {
    row: 4,
    col: 1,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 8,
      },
      {
        row: 3,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 15,
      },
    ],
  },
];