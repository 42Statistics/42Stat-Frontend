export type DashboardProps = {
  defaultRows: DashboardRowType[];

  // 값이 있다면 해당 디바이스에서는 defaultRows 대신 들어온 값으로 대체한다.
  desktopRows?: DashboardRowType[];
  tabletRows?: DashboardRowType[];
  mobileRows?: DashboardRowType[];

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

export type DashboardRowItemProps = {
  rowSpan: number;
  colSpan: number;
  content: () => JSX.Element;
};

export type DashboardItemProps = {
  id: number;
  content: () => JSX.Element;
};
