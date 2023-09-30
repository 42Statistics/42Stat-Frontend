import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import {
  parseDateTemplate,
  parsePageNumber,
  parsePromo,
} from '@/Leaderboard/utils/parse';
import { DateTemplate } from '@shared/__generated__/graphql';

import type { LeaderboardScoreSearchParams } from '../contexts/LeaderboardScoreSearchParamsContext';

export default function parseLeaderboardScoreSearchParams(
  searchParams: URLSearchParams,
): LeaderboardScoreSearchParams {
  const { DATE, PAGE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const dateTemplate = parseDateTemplate(
    searchParams.get(DATE),
    DateTemplate.CurrWeek,
  );

  const pageNumber = parsePageNumber(searchParams.get(PAGE));
  const promo = parsePromo(searchParams.get(PROMO));

  return {
    dateTemplate,
    pageNumber,
    promo,
  };
}
