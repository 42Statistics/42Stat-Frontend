import {
  DesktopDashboardRowInfo,
  MobileDashboardRowInfo,
} from '@/utils/types/Dashboard';

export const useProfileGeneralPage = () => {
  const desktopDashboard: DesktopDashboardRowInfo[] = [
    {
      row: 1,
      col: 4,
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
  const mobileDashboard: MobileDashboardRowInfo[] = [
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
      ],
    },
  ];

  return { desktopDashboard, mobileDashboard };
};
