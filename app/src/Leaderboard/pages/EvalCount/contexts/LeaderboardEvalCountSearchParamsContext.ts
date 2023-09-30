import { createContext, useContext } from 'react';

import { DateTemplate } from '@shared/__generated__/graphql';

export type LeaderboardEvalCountSearchParams = {
  dateTemplate: DateTemplate;
  pageNumber: number;
  promo: number | null; // null: 전체
};

export const LeaderboardEvalCountSearchParamsContext =
  createContext<LeaderboardEvalCountSearchParams | null>(null);

export function useGetLeaderboardEvalCountSearchParamsContext() {
  const leaderboardEvalCountSearchParams = useContext(
    LeaderboardEvalCountSearchParamsContext,
  );

  if (!leaderboardEvalCountSearchParams) {
    throw new Error(
      'useGetLeaderboardEvalCountSearchParamsContext must be used within a Provider',
    );
  }
  return leaderboardEvalCountSearchParams;
}
