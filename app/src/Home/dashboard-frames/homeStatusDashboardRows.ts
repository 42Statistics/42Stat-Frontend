import type {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@shared/types/Dashboard';

export const homeStatusDesktopDashboardRows: DesktopDashboardRowType[] = [
  {
    row: 1,
    col: 3,
    items: [
      {
        row: 1,
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
        elementId: 3,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 2,
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
        elementId: 9,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 2,
        colSpan: 1,
        elementId: 14,
      },
    ],
  },
];

export const homeStatusTabletDashboardRows: TabletDashboardRowType[] = [
  {
    row: 1,
    col: 3,
    items: [
      {
        row: 1,
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
        elementId: 3,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 1,
        colSpan: 1,
        elementId: 2,
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
        colSpan: 1,
        elementId: 14,
      },
    ],
  },
];

export const homeStatusMobileDashboardRows: MobileDashboardRowType[] = [
  {
    row: 3,
    col: 1,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 1,
      },
      {
        row: 2,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 3,
      },
      {
        row: 3,
        col: 1,
        rowSpan: 1,
        colSpan: 1,
        elementId: 2,
      },
    ],
  },
  {
    row: 6,
    col: 1,
    items: [
      {
        row: 1,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 5,
      },
      {
        row: 3,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 9,
      },
      {
        row: 5,
        col: 1,
        rowSpan: 2,
        colSpan: 1,
        elementId: 14,
      },
    ],
  },
];