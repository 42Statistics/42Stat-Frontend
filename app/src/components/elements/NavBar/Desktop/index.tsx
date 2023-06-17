import styled from '@emotion/styled';
import { NavBar } from '../shared/NavBar';

export const DesktopNavBar = () => {
  return (
    <DesktopNavBarLayout>
      <NavBar />
    </DesktopNavBarLayout>
  );
};

export const DesktopNavBarLayout = styled.nav`
  position: fixed;
  // 유저 검색 중 DashboardItem이 scale 되었을 때 z-index가 작동하지 않는 문제 해결
  // Reference : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context#%EC%98%88%EC%8B%9C
  z-index: 1;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
