import styled from '@emotion/styled';
import { ReactTabsFunctionComponent, TabList, TabListProps } from 'react-tabs';

const CustomTabList: ReactTabsFunctionComponent<TabListProps> = (props) => (
  <StyledTabList {...props} />
);

CustomTabList.tabsRole = 'TabList';

const StyledTabList = styled(TabList)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; // 모바일에서는 탭을 가로 스크롤하도록 (더 좋은 방식이 있을지 고민 필요)
  margin-bottom: 2rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.mono.gray200}`};
`;

export { CustomTabList as TabList };
