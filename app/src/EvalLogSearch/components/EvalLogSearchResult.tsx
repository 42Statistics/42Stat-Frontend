import { ApolloError } from '@apollo/client';
import { Footer } from '@core/components/Footer';
import { useTheme } from '@emotion/react';
import { EvalLogEdge } from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Skeleton, VStack } from '@shared/ui-kit';
import React from 'react';
import { EvalLogList } from './EvalLogList';

type EvalLogSearchResultProps = {
  evalLogEdges: EvalLogEdge[];
  end: boolean;
  loading: boolean;
  error: ApolloError | undefined;
  infiniteScrollRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const EvalLogSearchResult = ({
  evalLogEdges,
  end,
  loading,
  error,
  infiniteScrollRef,
}: EvalLogSearchResultProps) => {
  if (error) {
    return (
      <>
        <FullPageApolloErrorView message={error.message} />
        <Footer />
      </>
    );
  }
  if (end && evalLogEdges.length === 0) {
    return (
      <>
        <FullPageApolloErrorView message="검색 결과가 없습니다." />
        <Footer />
      </>
    );
  }
  if (evalLogEdges.length === 0 && loading) {
    return (
      <VStack w="100%" spacing="1.2rem">
        <EvalLogSkeleton />
        <EvalLogSkeleton />
        <EvalLogSkeleton />
        <EvalLogSkeleton />
      </VStack>
    );
  }

  return (
    <>
      <EvalLogList evalLogEdges={evalLogEdges} />
      {!end ? (
        <VStack w="100%" spacing="1.2rem" ref={infiniteScrollRef}>
          <EvalLogSkeleton />
          <EvalLogSkeleton />
          <EvalLogSkeleton />
        </VStack>
      ) : (
        <Footer />
      )}
    </>
  );
};

const EvalLogSkeleton = () => {
  return <Skeleton h="20rem" />;
};
