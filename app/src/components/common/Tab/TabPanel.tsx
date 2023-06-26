type TabPanelProps = {
  show: boolean;
} & React.PropsWithChildren;

export const TabPanel = ({ children, show }: TabPanelProps) => {
  return <>{show && <div style={{ width: '100%' }}>{children}</div>}</>;
};
