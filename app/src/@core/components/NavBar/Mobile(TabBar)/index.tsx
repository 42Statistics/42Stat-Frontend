import styled from '@emotion/styled';
import { HStack } from '@shared/ui-kit';
import { useNavRoutes } from '../hooks/useNavRoutes';
import { TabItem } from './TabItem';

export const TabBar = () => {
  const { NAV_ROUTES } = useNavRoutes();

  return (
    <Layout>
      <HStack as="ul" w="100%" justify="space-around">
        <TabItem route={NAV_ROUTES.HOME} />
        <TabItem route={NAV_ROUTES.PROFILE} />
        <TabItem route={NAV_ROUTES.LEADERBOARD} />
        <TabItem route={NAV_ROUTES.EVALLOG} />
        <TabItem route={NAV_ROUTES.SETTING} />
      </HStack>
    </Layout>
  );
};

const Layout = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.4rem 2rem 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  user-select: none;
`;
