import { GetEvalLogsQuery } from '@/__generated__/graphql';
import { Spinner, Text } from '@/components/common';
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
  if (loading) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>result not found</h1>;
  if (data.getEvalLogs.length === 0) return <Text>검색 결과가 없습니다.</Text>;
  return (
    <>
      <EvalLogList list={data.getEvalLogs} />
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
