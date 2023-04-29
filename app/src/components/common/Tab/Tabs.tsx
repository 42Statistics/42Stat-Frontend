import styled from '@emotion/styled';
import { ReactTabsFunctionComponent, Tabs, TabsProps } from 'react-tabs';

const CustomTabs: ReactTabsFunctionComponent<TabsProps> = ({
  children,
  ...propsExceptChildren
}) => <StyledTabs {...propsExceptChildren}>{children}</StyledTabs>;

CustomTabs.tabsRole = 'Tabs';

const StyledTabs = styled(Tabs)`
  width: 100%;
`;

export { CustomTabs as Tabs };
