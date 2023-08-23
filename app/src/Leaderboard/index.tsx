import { ROUTES } from '@shared/constants/(tmp)routes';
import { Tab, Tabs, VStack } from '@shared/ui-kit';
import { Outlet, useLocation } from 'react-router-dom';

const LeaderboardLayout = () => {
  const { pathname } = useLocation();

  return (
    <VStack w="100%" spacing="5rem">
      <Tabs>
        <Tab
          selected={pathname.startsWith(ROUTES.LEADERBOARD_LEVEL)}
          link={ROUTES.LEADERBOARD_LEVEL}
        >
          레벨
        </Tab>
        <Tab
          selected={pathname.startsWith(ROUTES.LEADERBOARD_EXP_INCREMENT)}
          link={ROUTES.LEADERBOARD_EXP_INCREMENT}
        >
          경험치 증가량
        </Tab>
        <Tab
          selected={pathname.startsWith(ROUTES.LEADERBOARD_COALITION_SCORE)}
          link={ROUTES.LEADERBOARD_COALITION_SCORE}
        >
          코알리숑 스코어
        </Tab>
        <Tab
          selected={pathname.startsWith(ROUTES.LEADERBOARD_EVAL_COUNT)}
          link={ROUTES.LEADERBOARD_EVAL_COUNT}
        >
          평가 횟수
        </Tab>
      </Tabs>
      <Outlet />
    </VStack>
  );
};

export default LeaderboardLayout;
