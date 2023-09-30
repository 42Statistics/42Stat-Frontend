import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { parsePageNumber, parsePromo } from '@/Leaderboard/utils/parse';

import type { LeaderboardLevelSearchParams } from '../contexts/LeaderboardLevelSearchParamsContext';

export default function parseLeaderboardLevelSearchParams(
  searchParams: URLSearchParams,
): LeaderboardLevelSearchParams {
  const { PAGE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const pageNumber = parsePageNumber(searchParams.get(PAGE));
  const promo = parsePromo(searchParams.get(PROMO));

  return {
    pageNumber,
    promo,
  };
}
