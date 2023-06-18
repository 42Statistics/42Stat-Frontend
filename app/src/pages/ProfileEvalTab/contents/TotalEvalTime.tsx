import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/TextDefault';
import { DashboardContent } from '@components/templates/DashboardContent';

const GET_TOTAL_EVAL_TIME = gql(/* GraphQL */ `
  query GetTotalEvalTime {
    getPersonalEval {
      totalDuration
    }
  }
`);

export const TotalEvalTime = () => {
  const title = '누적 평가 시간';

  const { loading, error, data: queryData } = useQuery(GET_TOTAL_EVAL_TIME);

  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!queryData)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { totalDuration } = queryData.getPersonalEval;

  return (
    <DashboardContent title={title}>
      <TextDefault
        text={`${Math.floor(totalDuration / 60).toLocaleString()}시간 ${
          totalDuration % 60
        }분`}
      />
    </DashboardContent>
  );
};
