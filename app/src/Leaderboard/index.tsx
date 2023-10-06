import { Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@shared/constants/routes';
import { Tab, Tabs, VStack } from '@shared/ui-kit';

import { LeaderboardPromoListFetcher } from './components/LeaderboardPromoListFetcher';
import { LeaderboardURLReader } from './components/LeaderboardURLReader';

export default function LeaderboardLayout() {
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
          selected={pathname.startsWith(ROUTES.LEADERBOARD_SCORE)}
          link={ROUTES.LEADERBOARD_SCORE}
        >
          코알리숑 스코어
        </Tab>
        <Tab
          selected={pathname.startsWith(ROUTES.LEADERBOARD_EVAL_COUNT)}
          link={ROUTES.LEADERBOARD_EVAL_COUNT}
        >
          평가 횟수
        </Tab>
        <Tab
          selected={pathname.startsWith(ROUTES.LEADERBOARD_COMMENT)}
          link={ROUTES.LEADERBOARD_COMMENT}
        >
          코멘트 길이
        </Tab>
      </Tabs>
      <LeaderboardURLReader>
        <LeaderboardPromoListFetcher>
          <Outlet />
        </LeaderboardPromoListFetcher>
      </LeaderboardURLReader>
    </VStack>
  );
}
