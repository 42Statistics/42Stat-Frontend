import { TabletNavItem } from '@core/components/NavBar/Tablet/TabletNavItem';
import { useNavRoutes } from '@core/components/NavBar/hooks/useNavRoutes';

import { Spacer, VStack } from '@shared/ui-kit';

export const TabletNavMenu = () => {
  const { NAV_ROUTES } = useNavRoutes();

  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      <TabletNavItem route={NAV_ROUTES.HOME} />
      <TabletNavItem route={NAV_ROUTES.PROFILE} />
      <TabletNavItem route={NAV_ROUTES.LEADERBOARD} />
      <TabletNavItem route={NAV_ROUTES.EVALLOG} />
      <TabletNavItem route={NAV_ROUTES.CALCULATOR} />
      <TabletNavItem route={NAV_ROUTES.FEED} />
      <Spacer />
      <TabletNavItem route={NAV_ROUTES.SETTING} />
    </VStack>
  );
};
