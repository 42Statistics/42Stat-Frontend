import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { setLeaderboardArgsByURLSearchParamsAtom } from '../atoms/setLeaderboardArgsByURLSearchParamsAtom';

export function LeaderboardURLReader({ children }: React.PropsWithChildren) {
  const [searchParams] = useSearchParams();

  const setLeaderboardArgs = useSetAtom(
    setLeaderboardArgsByURLSearchParamsAtom,
  );

  useEffect(() => {
    setLeaderboardArgs(searchParams);
  }, [searchParams, setLeaderboardArgs]);

  return <>{children}</>;
}
