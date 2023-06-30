import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
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
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

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
