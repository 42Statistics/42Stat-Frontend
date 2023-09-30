import { createContext, useContext } from 'react';

import { DateTemplate } from '@shared/__generated__/graphql';

export type LeaderboardScoreSearchParams = {
  dateTemplate: DateTemplate;
  pageNumber: number;
  promo: number | null; // null: 전체
};

export const LeaderboardScoreSearchParamsContext =
  createContext<LeaderboardScoreSearchParams | null>(null);

export function useGetLeaderboardScoreSearchParamsContext() {
  const leaderboardScoreSearchParams = useContext(
    LeaderboardScoreSearchParamsContext,
  );

  if (!leaderboardScoreSearchParams) {
    throw new Error(
      'useGetLeaderboardScoreSearchParamsContext must be used within a Provider',
    );
  }
  return leaderboardScoreSearchParams;
}
