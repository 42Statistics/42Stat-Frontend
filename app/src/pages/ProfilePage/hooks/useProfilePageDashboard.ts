import {
  DashboardItemProps,
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';

import { UserProfile } from '../contents';

export const useProfilePageDashboard = () => ({
  contents,
  desktopRows,
  tabletRows,
  mobileRows,
});

const contents: DashboardItemProps[] = [
  {
    id: 0,
    content: UserProfile,
  },
];

const desktopRows: DesktopDashboardRowType[] = [
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

const tabletRows: TabletDashboardRowType[] = [
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

const mobileRows: MobileDashboardRowType[] = [
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
