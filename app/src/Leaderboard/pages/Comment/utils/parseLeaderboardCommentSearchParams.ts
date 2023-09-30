import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { parsePageNumber, parsePromo } from '@/Leaderboard/utils/parse';

import type { LeaderboardCommentSearchParams } from '../contexts/LeaderboardCommentSearchParamsContext';

export default function parseLeaderboardCommentSearchParams(
  searchParams: URLSearchParams,
): LeaderboardCommentSearchParams {
  const { PAGE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const pageNumber = parsePageNumber(searchParams.get(PAGE));
  const promo = parsePromo(searchParams.get(PROMO));

  return {
    pageNumber,
    promo,
  };
}
