import { useNavRoutes } from '@core/components/NavBar/hooks/useNavRoutes';
import { NavItem } from '@core/components/NavBar/shared/NavItem';

import { Spacer, VStack } from '@shared/ui-kit';

type NavMenuProps = {
  hasSpacer?: boolean;
};

export const NavMenu = ({ hasSpacer = true }: NavMenuProps) => {
  const { NAV_ROUTES } = useNavRoutes();

  return (
    <VStack as="ul" w="100%" h="100%" justify="start" spacing="2rem">
      <NavItem route={NAV_ROUTES.HOME} />
      <NavItem route={NAV_ROUTES.PROFILE} />
      <NavItem route={NAV_ROUTES.LEADERBOARD} />
      <NavItem route={NAV_ROUTES.EVALLOG} />
      <NavItem route={NAV_ROUTES.CALCULATOR} />
      <NavItem route={NAV_ROUTES.FEED} />
      {hasSpacer && <Spacer />}
      <NavItem route={NAV_ROUTES.SETTING} />
    </VStack>
  );
};
