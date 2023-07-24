import { ApolloError } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { EvalLogEdge } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloErrorView';
import { Footer } from '@shared/components/Footer';
import { Center, Skeleton, Text, VStack } from '@shared/ui-kit';
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
  const theme = useTheme();

  if (error) {
    return (
      <>
        <Center h="20rem">
          <ApolloErrorView message={error.message} />
        </Center>
        <Footer />
      </>
    );
  }
  if (end && evalLogEdges.length === 0) {
    return (
      <>
        <Center h="20rem">
          <Text color={theme.colors.mono.gray300}>검색 결과가 없습니다.</Text>
        </Center>
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
