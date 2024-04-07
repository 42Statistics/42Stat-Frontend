import { DateTemplate } from '@shared/__generated__/graphql';
import {
  parseDateTemplate,
  parsePageNumber,
  parsePromo,
} from '@shared/utils/parsePaginationArgs';

import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import type { LeaderboardArgs } from '@/Leaderboard/types/LeaderboardArgs';

export const toLeaderboardArgs = (
  searchParams: URLSearchParams,
): LeaderboardArgs => {
  const { DATE, PAGE, PROMO, COALITION } = LEADERBOARD_PARAM_KEYS;

  const dateTemplate = parseDateTemplate(
    searchParams.get(DATE),
    DateTemplate.CurrWeek,
  );
  const pageNumber = parsePageNumber(searchParams.get(PAGE));
  const promo = parsePromo(searchParams.get(PROMO));
  const coalitionId = parsePromo(searchParams.get(COALITION));

  return {
    dateTemplate,
    pageNumber,
    promo,
    coalitionId,
  };
};
