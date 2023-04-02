import {
  DesktopDashboardRowInfo,
  MobileDashboardRowInfo,
} from '@/utils/types/Dashboard';

export const useTotalPage = () => {
  const desktopDashboard: DesktopDashboardRowInfo[] = [
    {
      row: 2,
      col: 3,
      items: [
        {
          row: 1,
          col: 1,
          rowSpan: 2,
          colSpan: 1,
          elementId: 0,
        },
        {
          row: 1,
          col: 2,
          rowSpan: 2,
          colSpan: 1,
          elementId: 1,
        },
        {
          row: 1,
          col: 3,
          rowSpan: 2,
          colSpan: 1,
          elementId: 2,
        },
      ],
    },
    {
      row: 2,
      col: 4,
      items: [
        {
          row: 1,
          col: 1,
          rowSpan: 2,
          colSpan: 1,
          elementId: 3,
        },
        {
          row: 1,
          col: 2,
          rowSpan: 2,
          colSpan: 1,
          elementId: 4,
        },
        {
          row: 1,
          col: 3,
          rowSpan: 2,
          colSpan: 1,
          elementId: 5,
        },
        {
          row: 1,
          col: 4,
          rowSpan: 1,
          colSpan: 1,
          elementId: 6,
        },
        {
          row: 2,
          col: 4,
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
          colSpan: 3,
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
          colSpan: 1,
          elementId: 9,
        },
        {
          row: 1,
          col: 2,
          rowSpan: 2,
          colSpan: 2,
          elementId: 10,
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
          elementId: 11,
        },
        {
          row: 1,
          col: 2,
          rowSpan: 2,
          colSpan: 1,
          elementId: 12,
        },
        {
          row: 1,
          col: 3,
          rowSpan: 2,
          colSpan: 1,
          elementId: 13,
        },
      ],
    },
  ];

  const mobileDashboard: MobileDashboardRowInfo[] = [];

  return { desktopDashboard, mobileDashboard };
};
