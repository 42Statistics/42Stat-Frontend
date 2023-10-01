import { createContext, useContext } from 'react';

import { DateTemplate } from '@shared/__generated__/graphql';

export type LeaderboardSearchParams = {
  dateTemplate: DateTemplate;
  pageNumber: number;
  promo: number | null; // null: 전체
};

export const LeaderboardSearchParamsContext =
  createContext<LeaderboardSearchParams | null>(null);

export function useGetLeaderboardSearchParamsContext() {
  const leaderboardSearchParams = useContext(LeaderboardSearchParamsContext);

  if (!leaderboardSearchParams) {
    throw new Error(
      'useGetLeaderboardSearchParamsContext must be used within a Provider',
    );
  }
  return leaderboardSearchParams;
}
