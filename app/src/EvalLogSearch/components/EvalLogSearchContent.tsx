import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import {
  GET_EVAL_LOGS,
  GET_EVAL_LOGS_DEFAULT_VARIABLES,
} from '@/EvalLogSearch/api/getEvalLogs';
import { evalLogSearchArgsAtom } from '@/EvalLogSearch/atoms/evalLogSearchArgsAtom';
import { useInfiniteScrollIndex } from '@/EvalLogSearch/hooks/useInfiniteScrollIndex';
import { useSearchTotalCount } from '@/EvalLogSearch/hooks/useSearchTotalCount';
import { Footer } from '@core/components/Footer';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { EvalLogList } from '@shared/components/EvalLogList/EvalLogList';
import { useIntersection } from '@shared/hooks/useIntersection';
import { Skeleton, VStack } from '@shared/ui-kit';

// todo: useQuery 를 추상화하면, useInfiniteQuery 도 추상화 할 수 있음.
// Apollo Client 에 영향 받지 않는 인터페이스를 만들 것.
export const EvalLogSearchContent = () => {
  // data fetching
  const evalLogSearchArgs = useAtomValue(evalLogSearchArgsAtom);

  const { loading, error, data, fetchMore } = useQuery(GET_EVAL_LOGS, {
    variables: {
      ...GET_EVAL_LOGS_DEFAULT_VARIABLES,
      ...evalLogSearchArgs,
    },
  });
  //

  // infinite scroll
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const intersectionCallback = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) {
        return;
      }

      if (!data?.getEvalLogs.pageInfo.hasNextPage) {
        return;
      }

      setIsFetchingMore(true);

      fetchMore({
        variables: {
          after: data.getEvalLogs.pageInfo.endCursor,
        },
      }).then(() => setTimeout(() => setIsFetchingMore(false), 10));
    },
    [data, fetchMore],
  );

  const observingRef = useIntersection<HTMLDivElement>(intersectionCallback, {
    threshold: 0.2,
  });

  const scrollIndex = useInfiniteScrollIndex({ data });
  const newDataStartRef = useRef<HTMLDivElement | null>(null);

  const searchTotalCount = useSearchTotalCount({ data, error });

  useEffect(() => {
    if (newDataStartRef.current) {
      newDataStartRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [scrollIndex, newDataStartRef]);
  //

  if (error) {
    return <EvalLogSearchError message={error.message} />;
  }

  if (loading || !data) {
    return <EvalLogSearchInitialSkeleton />;
  }

  if (searchTotalCount === 0) {
    return <EvalLogSearchError message="검색 결과가 없습니다." />;
  }

  const nodes = data.getEvalLogs.edges.map(({ node }) => node);

  if (data.getEvalLogs.pageInfo.hasNextPage && !isFetchingMore) {
    return (
      <>
        <EvalLogList
          list={nodes}
          ref={newDataStartRef}
          refIndex={scrollIndex}
        />
        <EvalLogSearchNextPageSkeleton ref={observingRef} />
      </>
    );
  }

  if (isFetchingMore) {
    observingRef.current = null;

    return (
      <>
        <EvalLogList list={nodes} />
        <EvalLogSearchNextPageSkeleton />
      </>
    );
  }

  return (
    <>
      <EvalLogList list={nodes} />
      <Footer />
    </>
  );
};

// #region Views
const EvalLogSearchError = ({ message }: { message: string }) => {
  return (
    <>
      <FullPageApolloErrorView message={message} />
      <Footer />
    </>
  );
};

const EvalLogSkeleton = () => {
  return <Skeleton h="20rem" />;
};

const EvalLogSearchInitialSkeleton = () => {
  return (
    <VStack w="100%" spacing="1.2rem">
      <EvalLogSkeleton />
      <EvalLogSkeleton />
      <EvalLogSkeleton />
    </VStack>
  );
};

const EvalLogSearchNextPageSkeleton = forwardRef(
  (_, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <VStack w="100%" spacing="1.2rem" ref={ref}>
        <EvalLogSkeleton />
      </VStack>
    );
  },
);

EvalLogSearchNextPageSkeleton.displayName = 'EvalLogSearchNextPageSkeleton';
// #endregion
