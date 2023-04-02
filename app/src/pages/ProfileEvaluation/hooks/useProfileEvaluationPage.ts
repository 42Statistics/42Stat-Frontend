import {
  DesktopDashboardRowType,
  MobileDashboardRowType,
} from '@/utils/types/Dashboard';

export const useProfileEvaluationPage = () => {
  const desktopDashboardRows: DesktopDashboardRowType[] = [
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
      ],
    },
  ];

  return { desktopDashboardRows, mobileDashboardRows };
};
