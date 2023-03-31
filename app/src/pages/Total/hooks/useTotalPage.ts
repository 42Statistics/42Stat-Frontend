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
          colSpan: 3,
          elementId: 0,
        },
      ],
    },
  ];

  const mobileDashboard: MobileDashboardRowInfo[] = [];

  return { desktopDashboard, mobileDashboard };
};
