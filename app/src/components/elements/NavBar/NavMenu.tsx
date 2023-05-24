import { Spacer, VStack } from '@/components/common';
import { NAV_ROUTES } from '@/routes/NAV_ROUTES';
import { NavItem } from './NavItem';

// TODO: SidebarMenu와 TabBar의 로직 유사하므로 통합 필요
export const NavMenu = () => {
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
