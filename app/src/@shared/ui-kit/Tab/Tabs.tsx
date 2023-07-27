import styled from '@emotion/styled';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

export const Tabs = ({ children }: PropsWithReactElementChildren) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow-x: auto; // 모바일에서는 탭을 가로 스크롤하도록 (더 좋은 방식이 있을지 고민 필요)
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.mono.gray200}`};
  user-select: none;
`;
