import { useEffect, useRef } from 'react';

import { QueryResult } from '@apollo/client';

import type { GetEvalLogsQuery } from '@shared/__generated__/graphql';

// todo: 이후, useInfiniteScroll 을 추상화하면 그쪽으로 이동
export const useInfiniteScrollIndex = ({
  data,
}: Pick<QueryResult<GetEvalLogsQuery>, 'data'>) => {
  const scrollIndex = useRef<number | null>(null);
  const prevDataLength = useRef<number | null>(null);

  useEffect(() => {
    if (!data || !data.getEvalLogs.pageInfo.totalCount) {
      scrollIndex.current = null;
      return;
    }

    scrollIndex.current = prevDataLength.current ? prevDataLength.current : 0;

    prevDataLength.current = data.getEvalLogs.edges.length;
  }, [scrollIndex, prevDataLength, data]);

  return scrollIndex.current;
};
