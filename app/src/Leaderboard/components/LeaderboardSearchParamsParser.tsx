import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  LeaderboardSearchParamsContext,
  type LeaderboardSearchParams,
} from '../contexts/LeaderboardSearchParamsContext';
import parseLeaderboardSearchParams from '../utils/parseLeaderboardSearchParams';

export default function LeaderboardSearchParamsParser({
  children,
}: React.PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const [parsedSearchParams, setParsedSearchParams] =
    useState<LeaderboardSearchParams | null>(null);

  useEffect(() => {
    setParsedSearchParams(parseLeaderboardSearchParams(searchParams));
  }, [searchParams]);

  if (!parsedSearchParams) {
    return null;
  }

  return (
    <LeaderboardSearchParamsContext.Provider value={parsedSearchParams}>
      {children}
    </LeaderboardSearchParamsContext.Provider>
  );
}
