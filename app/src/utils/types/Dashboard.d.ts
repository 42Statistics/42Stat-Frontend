export type DashboardItemInfo = {
  id: number;
  title?: string;
  description?: string;
};

export type DashboardItemContainerInfo = {
  row: number;
  col: number;
  rowSpan: number;
  colSpan: number;
  elementId: number;
};

export type DesktopDashboardRowInfo = {
  row: DesktopDashboardRowSize;
  col: DesktopDashboardColSize;
  items: DashboardItemContainerInfo[];
};

export type MobileDashboardRowInfo = {
  row: MobileDashboardRowSize;
  col: MobileDashboardColSize;
  items: DashboardItemContainerInfo[];
};

export type DesktopDashboardRowSize = 1 | 2;
export type DesktopDashboardColSize = 3 | 4;

export type MobileDashboardRowSize = 1 | 2;
export type MobileDashboardColSize = 1 | 2;
