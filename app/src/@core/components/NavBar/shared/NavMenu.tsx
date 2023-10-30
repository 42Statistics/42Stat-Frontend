import { useNavRoutes } from '@core/components/NavBar/hooks/useNavRoutes';
import { NavItem } from '@core/components/NavBar/shared/NavItem';
import { Spacer, VStack } from '@shared/ui-kit';

export type NavMenuProps = {
  onClose?: () => void;
};

// TODO: SidebarMenu와 TabBar의 로직 유사하므로 통합 필요
export const NavMenu = (props: NavMenuProps) => {
  const { NAV_ROUTES } = useNavRoutes();

  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      <NavItem {...props} route={NAV_ROUTES.HOME} />
      <NavItem {...props} route={NAV_ROUTES.PROFILE} />
      <NavItem {...props} route={NAV_ROUTES.LEADERBOARD} />
      <NavItem {...props} route={NAV_ROUTES.EVALLOG} />
      <NavItem {...props} route={NAV_ROUTES.CALCULATOR} />
      <Spacer />
      <NavItem {...props} route={NAV_ROUTES.SETTING} />
    </VStack>
  );
};
