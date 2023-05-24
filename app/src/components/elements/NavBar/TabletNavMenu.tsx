import { Spacer, VStack } from '@/components/common';
import { TabletNavItem } from './TabletNavItem';
import { useNavRoutes } from './hooks';

export const TabletNavMenu = () => {
  const { NAV_ROUTES } = useNavRoutes();

  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      <TabletNavItem route={NAV_ROUTES.HOME} />
      <TabletNavItem route={NAV_ROUTES.MY_PROFILE} />
      <TabletNavItem route={NAV_ROUTES.LEADERBOARD} />
      <TabletNavItem route={NAV_ROUTES.EVALLOG} />
      <Spacer />
      <TabletNavItem route={NAV_ROUTES.LOGOUT} />
    </VStack>
  );
};
