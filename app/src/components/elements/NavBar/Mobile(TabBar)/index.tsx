import { HStack } from '@components/common';
import styled from '@emotion/styled';
import { useNavRoutes } from '../hooks/useNavRoutes';
import { TabItem } from './TabItem';

export const TabBar = () => {
  const { NAV_ROUTES } = useNavRoutes();

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
