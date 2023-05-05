import { GetEvalLogsQuery } from '@/__generated__/graphql';
import { Loader, Text } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { ApolloError } from '@apollo/client';
import { EvalLogList } from './EvalLogList';
import { PageMoveArrow } from './PageMoveArrow';

type EvalLogSearchBoardProps = {
  loading: boolean;
  error: ApolloError | undefined;
  data: GetEvalLogsQuery | undefined;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const EvalLogSearchBoard = ({
  loading,
  error,
  data,
  pageNumber,
  setPageNumber,
}: EvalLogSearchBoardProps) => {
  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  if (data.getEvalLogs.nodes.length === 0)
    return <Text>검색 결과가 없습니다.</Text>;

  return (
    <>
      <EvalLogList list={data.getEvalLogs.nodes} />
      <PageMoveArrow
        handleDecrease={() => {
          setPageNumber((cur) => Math.max(cur - 1, 1));
        }}
        handleIncrease={() => {
          setPageNumber((cur) => Math.min(cur + 1, 42));
        }}
        pageNumber={pageNumber}
        maxPageNumber={42}
      />
    </>
  );
};

// export {};
