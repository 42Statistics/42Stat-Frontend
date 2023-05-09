import { HStack } from '@/components/common';
import { NAV_ROUTES } from '@/routes/NAV_ROUTES';
import styled from '@emotion/styled';
import { TabItem } from './TabItem';

export const TabBar = () => {
  return (
    <TabBarLayout>
      <HStack as="ul" w="100%" justify="space-around">
        <TabItem route={NAV_ROUTES.HOME} />
        <TabItem route={NAV_ROUTES.MY_PROFILE} />
        <TabItem route={NAV_ROUTES.LEADERBOARD} />
        <TabItem route={NAV_ROUTES.EVALLOG} />
        <TabItem route={NAV_ROUTES.LOGOUT} />
      </HStack>
    </TabBarLayout>
  );
};

const TabBarLayout = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  padding: 1.4rem 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
