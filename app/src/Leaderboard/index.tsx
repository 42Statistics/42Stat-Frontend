import { ROUTES } from '@shared/constants/ROUTES';
import { Tab, Tabs, VStack } from '@shared/ui-kit';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
const LeaderboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <VStack w="100%" spacing="5rem">
      <Tabs>
        <Tab
          selected={location.pathname.startsWith(ROUTES.LEADERBOARD_LEVEL)}
          onClick={() => navigate(ROUTES.LEADERBOARD_LEVEL)}
        >
          레벨
        </Tab>
        <Tab
          selected={location.pathname.startsWith(
            ROUTES.LEADERBOARD_EXP_INCREMENT,
          )}
          onClick={() => navigate(ROUTES.LEADERBOARD_EXP_INCREMENT)}
        >
          경험치 증가량
        </Tab>
        <Tab
          selected={location.pathname.startsWith(
            ROUTES.LEADERBOARD_COALITION_SCORE,
          )}
          onClick={() => navigate(ROUTES.LEADERBOARD_COALITION_SCORE)}
        >
          코알리숑 스코어
        </Tab>
        <Tab
          selected={location.pathname.startsWith(ROUTES.LEADERBOARD_EVAL_COUNT)}
          onClick={() => navigate(ROUTES.LEADERBOARD_EVAL_COUNT)}
        >
          평가 횟수
        </Tab>
      </Tabs>
      <Outlet />
    </VStack>
  );
};

export default LeaderboardPage;
