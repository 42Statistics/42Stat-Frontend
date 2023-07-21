import { PropsWithReactNodeChildren } from '@/types/PropsWithChildren';

type TabPanelProps = PropsWithReactNodeChildren<{
  show: boolean;
}>;

export const TabPanel = ({ children, show }: TabPanelProps) => {
  return <>{show ? <div style={{ width: '100%' }}>{children}</div> : null}</>;
};
