export type DashboardProps = {
  rows: DashboardRowType[];
  contents: DashboardItemProps[];
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
