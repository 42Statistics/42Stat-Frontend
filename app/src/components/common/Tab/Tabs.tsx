import styled from '@emotion/styled';
import { HStack } from '../Stack';

export const Tabs = ({ children }: React.PropsWithChildren) => {
  return <StyledTabs>{children}</StyledTabs>;
};

const StyledTabs = styled(HStack)`
  width: 100%;
  justify-content: flex-start;
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow-x: auto; // 모바일에서는 탭을 가로 스크롤하도록 (더 좋은 방식이 있을지 고민 필요)
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.mono.gray200}`};
`;
