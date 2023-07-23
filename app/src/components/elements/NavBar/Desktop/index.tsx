import { ROUTES } from '@/constants/ROUTES';
import { userAtom } from '@atoms/userAtom';
import { VStack } from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { DesktopNavProfile } from '@components/elements/NavProfile/Desktop';
import { SearchBarShapeButton } from '@components/elements/SearchBarShapeButton';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';
import { DesktopNavMenu } from './DesktopNavMenu';

type DesktopNavBarProps = {
  fixed?: boolean;
};

export const DesktopNavBar = ({ fixed = true }: DesktopNavBarProps) => {
  const user = useAtomValue(userAtom);

  return (
    <Layout fixed={fixed}>
      <VStack w="100%" h="100%" spacing="4rem">
        <Link to={ROUTES.ROOT}>
          <AppLogoTitle size="sm" />
        </Link>
        <DesktopNavProfile
          imgUrl={user.imgUrl}
          name={user.displayname}
          login={user.login}
        />
        <SearchBarShapeButton />
        <DesktopNavMenu />
      </VStack>
    </Layout>
  );
};

type LayoutProps = {
  fixed: boolean;
};

const Layout = styled.nav<LayoutProps>`
  position: ${({ fixed }) => fixed && 'fixed'};
  // 유저 검색 중 DashboardItem이 scale 되었을 때 z-index가 작동하지 않는 문제 해결
  // Reference : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context#%EC%98%88%EC%8B%9C
  z-index: 1;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 1px solid ${({ theme }) => theme.colors.mono.gray50};
  border-top-right-radius: ${({ theme, fixed }) => !fixed && theme.radius.sm};
  border-bottom-right-radius: ${({ theme, fixed }) =>
    !fixed && theme.radius.sm};
  user-select: none;
`;
