export type DashboardProps = {
  rows: DashboardRowType[];
  contents: DashboardItemProps[];
};

export type DashboardRowType = {
  items: DashboardItemType[];
};

export type DashboardItemType = {
  rowSpan: number;
  colSpan: number;
  elementId: number;
};

export type DashboardItemProps = {
  id: number;
  content: () => JSX.Element;
};
