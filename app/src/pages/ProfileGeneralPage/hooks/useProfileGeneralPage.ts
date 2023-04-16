import {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

export const useProfileGeneralPage = () => {
  const desktopDashboardRows: DesktopDashboardRowType[] = [
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
          rowSpan: 1,
          colSpan: 1,
          elementId: 2,
        },
        {
          row: 2,
          col: 2,
          rowSpan: 1,
          colSpan: 1,
          elementId: 3,
        },
        {
          row: 1,
          col: 3,
          rowSpan: 2,
          colSpan: 1,
          elementId: 4,
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
          colSpan: 2,
          elementId: 7,
        },
      ],
    },
  ];

  const tabletDashboardRows: TabletDashboardRowType[] = [
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
          rowSpan: 1,
          colSpan: 1,
          elementId: 2,
        },
        {
          row: 2,
          col: 2,
          rowSpan: 1,
          colSpan: 1,
          elementId: 3,
        },
        {
          row: 1,
          col: 3,
          rowSpan: 2,
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
          colSpan: 3,
          elementId: 5,
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
          elementId: 6,
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
          elementId: 7,
        },
      ],
    },
  ];

  const mobileDashboardRows: MobileDashboardRowType[] = [
    {
      row: 2,
      col: 2,
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
          rowSpan: 1,
          colSpan: 1,
          elementId: 2,
        },
        {
          row: 2,
          col: 2,
          rowSpan: 1,
          colSpan: 1,
          elementId: 3,
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
          elementId: 4,
        },
      ],
    },
    {
      row: 1,
      col: 1,
      items: [
        {
          row: 1,
          col: 1,
          rowSpan: 1,
          colSpan: 1,
          elementId: 5,
        },
      ],
    },
    {
      row: 1,
      col: 1,
      items: [
        {
          row: 1,
          col: 1,
          rowSpan: 1,
          colSpan: 1,
          elementId: 6,
        },
      ],
    },
    {
      row: 1,
      col: 1,
      items: [
        {
          row: 1,
          col: 1,
          rowSpan: 1,
          colSpan: 1,
          elementId: 7,
        },
      ],
    },
  ];

  return { desktopDashboardRows, tabletDashboardRows, mobileDashboardRows };
};
