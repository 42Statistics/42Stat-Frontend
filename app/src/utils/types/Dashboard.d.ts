export type DashboardItemProps = {
  id?: number;
  title?: string;
  description?: string;
  content: () => JSX.Element;
};

export type DesktopDashboardRowType = {
  row: DesktopDashboardRowSize;
  col: DesktopDashboardColSize;
  items: {
    row: number;
    col: number;
    rowSpan: number;
    colSpan: number;
    elementId: number;
  }[];
};

export type TabletDashboardRowType = {
  row: TabletDashboardRowSize;
  col: TabletDashboardColSize;
  items: {
    row: number;
    col: number;
    rowSpan: number;
    colSpan: number;
    elementId: number;
  }[];
};

export type MobileDashboardRowType = {
  row: MobileDashboardRowSize;
  col: MobileDashboardColSize;
  items: {
    row: number;
    col: number;
    rowSpan: number;
    colSpan: number;
    elementId: number;
  }[];
};

export type DesktopDashboardRowSize = 1 | 2;
export type DesktopDashboardColSize = 3 | 4;

export type TabletDashboardRowSize = 1 | 2;
export type TabletDashboardColSize = 2 | 3;

export type MobileDashboardRowSize = 1 | 2;
export type MobileDashboardColSize = 1 | 2;
