import { Spacer, VStack } from '@/components/common';
import { NAV_ROUTES } from '@/routes/NAV_ROUTES';
import { TabletNavItem } from './TabletNavItem';

export const TabletNavMenu = () => {
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
