export type DashboardProps = {
  desktopRows: DesktopDashboardRowType[];
  tabletRows: TabletDashboardRowType[];
  mobileRows: MobileDashboardRowType[];
  contents: DashboardItemProps[];
};

export type DesktopDashboardProps = {
  rows: DesktopDashboardRowType[];
  contents: DashboardItemProps[];
};

export type TabletDashboardProps = {
  rows: TabletDashboardRowType[];
  contents: DashboardItemProps[];
};

export type MobileDashboardProps = {
  rows: MobileDashboardRowType[];
  contents: DashboardItemProps[];
};

export type DashboardItemProps = {
  id?: number;
  title?: string;
  description?: string;
  content: () => JSX.Element;
};

export type DesktopDashboardRowType = {
  row: number;
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
  row: number;
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
  row: number;
  col: MobileDashboardColSize;
  items: {
    row: number;
    col: number;
    rowSpan: number;
    colSpan: number;
    elementId: number;
  }[];
};

export type DesktopDashboardColSize = 3 | 4;

export type TabletDashboardColSize = 2 | 3;

export type MobileDashboardColSize = 1 | 2;
