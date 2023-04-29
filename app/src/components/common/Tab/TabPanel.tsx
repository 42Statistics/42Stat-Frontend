import styled from '@emotion/styled';
import {
  ReactTabsFunctionComponent,
  TabPanel,
  TabPanelProps,
} from 'react-tabs';

const CustomTabPanel: ReactTabsFunctionComponent<TabPanelProps> = ({
  children,
  ...propsExceptChildren
}) => <StyledTabPanel {...propsExceptChildren}>{children}</StyledTabPanel>;

CustomTabPanel.tabsRole = 'TabPanel';

const StyledTabPanel = styled(TabPanel)``;

export { CustomTabPanel as TabPanel };
