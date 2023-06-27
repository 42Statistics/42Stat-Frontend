import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/TextDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_TOTAL_EVAL_TIME = gql(/* GraphQL */ `
  query GetTotalEvalTime($login: String!) {
    getPersonalEval(login: $login) {
      totalDuration
    }
  }
`);

export const TotalEvalTime = () => {
  const { username } = useParams() as { username: string };

  const title = '누적 평가 시간';
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_TIME, {
    variables: { login: username },
  });

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
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { totalDuration } = data.getPersonalEval;

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
