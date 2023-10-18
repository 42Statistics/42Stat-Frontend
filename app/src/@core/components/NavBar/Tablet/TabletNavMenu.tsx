import { Spacer, VStack } from '@shared/ui-kit';
import { useNavRoutes } from '../hooks/useNavRoutes';
import { TabletNavItem } from './TabletNavItem';

export const TabletNavMenu = () => {
  const { NAV_ROUTES } = useNavRoutes();

  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      <TabletNavItem route={NAV_ROUTES.HOME} />
      <TabletNavItem route={NAV_ROUTES.PROFILE} />
      <TabletNavItem route={NAV_ROUTES.LEADERBOARD} />
      <TabletNavItem route={NAV_ROUTES.EVALLOG} />
      <TabletNavItem route={NAV_ROUTES.CALCULATOR} />
      <Spacer />
      <TabletNavItem route={NAV_ROUTES.SETTING} />
    </VStack>
  );
};
