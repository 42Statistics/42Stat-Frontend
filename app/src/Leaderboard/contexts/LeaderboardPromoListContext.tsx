import { createContext, useContext } from 'react';

import { Promo } from '@shared/__generated__/graphql';

export const LeaderboardPromoListContext = createContext<
  Promo[] | null | undefined
>(null);

export function useGetLeaderboardPromoListContext() {
  const leaderboardPromoList = useContext(LeaderboardPromoListContext);

  if (!leaderboardPromoList) {
    throw new Error(
      'useGetLeaderboardPromoListContext must be used within a Provider',
    );
  }
  return leaderboardPromoList;
}
