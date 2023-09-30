import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  LeaderboardLevelSearchParamsContext,
  type LeaderboardLevelSearchParams,
} from '../contexts/LeaderboardLevelSearchParamsContext';
import parseLeaderboardLevelSearchParams from '../utils/parseLeaderboardLevelSearchParams';

export default function LeaderboardLevelSearchParamsParser({
  children,
}: React.PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const [parsedSearchParams, setParsedSearchParams] =
    useState<LeaderboardLevelSearchParams | null>(null);

  useEffect(() => {
    setParsedSearchParams(parseLeaderboardLevelSearchParams(searchParams));
  }, [searchParams]);

  if (!parsedSearchParams) {
    return null;
  }

  return (
    <LeaderboardLevelSearchParamsContext.Provider value={parsedSearchParams}>
      {children}
    </LeaderboardLevelSearchParamsContext.Provider>
  );
}
