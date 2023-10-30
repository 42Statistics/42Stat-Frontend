import { useLocation, useSearchParams } from 'react-router-dom';

import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';

export const useGetSelectKey = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { dateTemplate } = toLeaderboardArgs(searchParams);

  const promoSelectKey = 'promo_' + pathname + dateTemplate;
  const coalitionSelectKey = 'coalition_' + pathname + dateTemplate;

  return { promoSelectKey, coalitionSelectKey };
};
