type TabPanelProps = {
  show: boolean;
} & React.PropsWithChildren;

export const TabPanel = ({ children, show }: TabPanelProps) => {
  return <div style={{ width: '100%' }}>{show && children}</div>;
};
