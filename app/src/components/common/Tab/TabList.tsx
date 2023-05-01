import styled from '@emotion/styled';
import { ReactTabsFunctionComponent, TabList, TabListProps } from 'react-tabs';

const CustomTabList: ReactTabsFunctionComponent<TabListProps> = (props) => (
  <StyledTabList {...props} />
);

CustomTabList.tabsRole = 'TabList';

const StyledTabList = styled(TabList)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary.light}`};
`;

export { CustomTabList as TabList };
