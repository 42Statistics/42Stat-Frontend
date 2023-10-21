import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

import { TabItem } from '@core/components/NavBar/Mobile(TabBar)/TabItem';
import { useNavRoutes } from '@core/components/NavBar/hooks/useNavRoutes';
import { HStack } from '@shared/ui-kit';

export const TabBar = () => {
  const { NAV_ROUTES } = useNavRoutes();
  const isSmallDevice = useIsSmallDevice();

  return (
    <Layout isSmallDevice={isSmallDevice}>
      <HStack as="ul" w="100%" justify="space-around">
        <TabItem route={NAV_ROUTES.HOME} />
        <TabItem route={NAV_ROUTES.PROFILE} />
        <TabItem route={NAV_ROUTES.LEADERBOARD} />
        <TabItem route={NAV_ROUTES.EVALLOG} />
        <TabItem route={NAV_ROUTES.CALCULATOR} />
        <TabItem route={NAV_ROUTES.SETTING} />
      </HStack>
    </Layout>
  );
};

const useIsSmallDevice = () => useMediaQuery({ maxWidth: '480px' });

type LayoutProps = {
  isSmallDevice: boolean;
};

const Layout = styled.nav<LayoutProps>`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: ${({ isSmallDevice }) =>
    isSmallDevice ? '1rem 0' : '0.4rem 2rem 1rem 2rem'};
  background-color: ${({ theme }) => theme.colors.mono.white};
  user-select: none;
`;
