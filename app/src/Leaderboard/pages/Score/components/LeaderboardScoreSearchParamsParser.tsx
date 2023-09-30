import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  LeaderboardScoreSearchParamsContext,
  type LeaderboardScoreSearchParams,
} from '../contexts/LeaderboardScoreSearchParamsContext';
import parseLeaderboardScoreSearchParams from '../utils/parseLeaderboardScoreSearchParams';

export default function LeaderboardScoreSearchParamsParser({
  children,
}: React.PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const [parsedSearchParams, setParsedSearchParams] =
    useState<LeaderboardScoreSearchParams | null>(null);

  useEffect(() => {
    setParsedSearchParams(parseLeaderboardScoreSearchParams(searchParams));
  }, [searchParams]);

  if (!parsedSearchParams) {
    return null;
  }

  return (
    <LeaderboardScoreSearchParamsContext.Provider value={parsedSearchParams}>
      {children}
    </LeaderboardScoreSearchParamsContext.Provider>
  );
}
