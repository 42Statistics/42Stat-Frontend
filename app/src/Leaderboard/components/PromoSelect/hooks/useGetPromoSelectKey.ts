import { useLocation, useSearchParams } from 'react-router-dom';

import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';

export function useGetPromoSelectKey() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { dateTemplate } = toLeaderboardArgs(searchParams);

  return pathname + dateTemplate;
}