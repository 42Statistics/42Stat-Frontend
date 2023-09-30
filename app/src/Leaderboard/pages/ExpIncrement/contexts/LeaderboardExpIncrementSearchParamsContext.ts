import { createContext, useContext } from 'react';

import { DateTemplate } from '@shared/__generated__/graphql';

export type LeaderboardExpIncrementSearchParams = {
  dateTemplate: DateTemplate;
  pageNumber: number;
  promo: number | null; // null: 전체
};

export const LeaderboardExpIncrementSearchParamsContext =
  createContext<LeaderboardExpIncrementSearchParams | null>(null);

export function useGetLeaderboardExpIncrementSearchParamsContext() {
  const leaderboardExpIncrementSearchParams = useContext(
    LeaderboardExpIncrementSearchParamsContext,
  );

  if (!leaderboardExpIncrementSearchParams) {
    throw new Error(
      'useGetLeaderboardExpIncrementSearchParamsContext must be used within a Provider',
    );
  }
  return leaderboardExpIncrementSearchParams;
}
