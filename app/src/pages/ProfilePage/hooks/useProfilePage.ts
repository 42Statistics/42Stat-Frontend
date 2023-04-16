import {
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';
import { ProfileMenuOption } from '@/utils/types/ProfileMenu';

export const useProfilePage = () => {
  const options: ProfileMenuOption[] = [
    { menu: 'General', text: '일반' },
    { menu: 'Evaluation', text: '평가' },
  ];

  const desktopDashboardRows: DesktopDashboardRowType[] = [
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

  const tabletDashboardRows: TabletDashboardRowType[] = [
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

  const mobileDashboardRows: MobileDashboardRowType[] = [
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

  return {
    options,
    desktopDashboardRows,
    tabletDashboardRows,
    mobileDashboardRows,
  };
};
