export type DashboardProps = {
  rows: DashboardRowType[];
  contents: DashboardItemProps[];
};

export type DashboardRowType = {
  rowSpan: number;
  colSpan: number;
  elementId: number;
}[];

export type DashboardItemProps = {
  id: number;
  content: () => JSX.Element;
};
