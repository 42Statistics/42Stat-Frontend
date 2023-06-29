import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
  NoneDash,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/TextDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_ESTIMATE_TIME_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetEstimateTimeByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      estimateTime
    }
  }
`);

export const EstimateTime = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '예상 소요 기간';
  const { loading, error, data } = useQuery(GET_ESTIMATE_TIME_BY_PROJECT_NAME, {
    variables: { projectName },
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

  const { estimateTime } = data.getProjectInfo;

  return (
    <DashboardContent title={title}>
      {estimateTime != null ? (
        <TextDefault text={estimateTime} />
      ) : (
        <NoneDash />
      )}
    </DashboardContent>
  );
};
