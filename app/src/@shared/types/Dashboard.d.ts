export type DashboardProps = {
  rows: DashboardRowType[];
  contents: DashboardItemProps[];
};

export type DashboardTempProps = {
  rows: DashboardTempType[];
  contents: DashboardItemProps[];
};

export type DashboardTempType = {
  items: {
    rowSpan: number;
    colSpan: number;
    elementId: number;
  }[];
};

export type DashboardRowType = {
  colSpan: number;
  items: {
    rowSpan: number;
    elementId: number;
  }[];
};

export type DashboardItemProps = {
  id: number;
  content: () => JSX.Element;
};
