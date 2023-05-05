import type {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

export const statPageDesktopDashboardRows: DesktopDashboardRowType[] = [
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
      {
        row: 1,
        col: 4,
        rowSpan: 1,
        colSpan: 1,
        elementId: 5,
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
        elementId: 6,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 7,
      },
      {
        row: 1,
        col: 3,
        rowSpan: 2,
        colSpan: 1,
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
        colSpan: 3,
        elementId: 9,
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
        elementId: 10,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 2,
        elementId: 11,
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
        elementId: 12,
      },
      {
        row: 1,
        col: 2,
        rowSpan: 2,
        colSpan: 1,
        elementId: 13,
      },
    ],
  },
];

export const statPageTabletDashboardRows: TabletDashboardRowType[] = [
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
export const statPageMobileDashboardRows: MobileDashboardRowType[] = [];
