import { userAtom } from '@atoms/userAtom';
import { Avatar, HStack } from '@components/common';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';
import { useNavRoutes } from '../hooks/useNavRoutes';
import { TabItem } from './TabItem';

export const TabBar = () => {
  const { NAV_ROUTES } = useNavRoutes();
  const user = useAtomValue(userAtom);

  return (
    <TabBarLayout>
      <HStack as="ul" w="100%" justify="space-around">
        <TabItem route={NAV_ROUTES.HOME} />
        <TabItem route={NAV_ROUTES.PROFILE} />
        <TabItem route={NAV_ROUTES.LEADERBOARD} />
        <TabItem route={NAV_ROUTES.EVALLOG} />
        <Avatar size="sm" src={user.imgUrl} />
      </HStack>
    </TabBarLayout>
  );
};

const TabBarLayout = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  padding: 1.4rem 2rem 6rem 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
