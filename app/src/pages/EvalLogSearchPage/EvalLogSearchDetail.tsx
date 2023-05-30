import { EvalLog } from '@/__generated__/graphql';
import { ApolloError } from '@apollo/client';
import { Center, Text, VStack } from '@components/common';
import { ApolloBadRequest } from '@components/elements/DashboardContentView';
import { Footer } from '@components/elements/Footer/Footer';
import { useTheme } from '@emotion/react';
import React from 'react';
import { EvalLogList } from './EvalLogList';
import { EvalLogSkeleton } from './EvalLogSkeleton';

type EvalLogSearchDetailProps = {
  evalLogs: EvalLog[];
  end: boolean;
  loading: boolean;
  error: ApolloError | undefined;
  infiniteScrollRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const EvalLogSearchDetail = ({
  evalLogs,
  end,
  loading,
  error,
  infiniteScrollRef,
}: EvalLogSearchDetailProps) => {
  const theme = useTheme();

  if (error) {
    return (
      <>
        <Center h="20rem">
          <ApolloBadRequest msg={error.message} />
        </Center>
        <Footer />
      </>
    );
  }
  if (end && evalLogs.length === 0) {
    return (
      <>
        <Center h="20rem">
          <Text color={theme.colors.mono.gray300}>검색 결과가 없습니다.</Text>
        </Center>
        <Footer />
      </>
    );
  }
  if (evalLogs.length === 0 && loading) {
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
      <EvalLogList evalLogs={evalLogs} />
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
