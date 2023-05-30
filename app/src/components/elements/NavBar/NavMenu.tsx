import { Spacer, VStack } from '@components/common';
import { NavItem } from './NavItem';
import { useNavRoutes } from './hooks';

// TODO: SidebarMenu와 TabBar의 로직 유사하므로 통합 필요
export const NavMenu = () => {
  const { NAV_ROUTES } = useNavRoutes();

  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      <NavItem route={NAV_ROUTES.HOME} />
      <NavItem route={NAV_ROUTES.MY_PROFILE} />
      <NavItem route={NAV_ROUTES.LEADERBOARD} />
      <NavItem route={NAV_ROUTES.EVALLOG} />
      <Spacer />
      <NavItem route={NAV_ROUTES.LOGOUT} />
    </VStack>
  );
};
