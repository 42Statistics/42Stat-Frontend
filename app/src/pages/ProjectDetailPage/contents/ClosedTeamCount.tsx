import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_CLOSED_TEAM_COUNT_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetClosedTeamCountByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      closedTeamCount
    }
  }
`);

export const ClosedTeamCount = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '지금까지 제출한 팀';
  const { loading, error, data } = useQuery(
    GET_CLOSED_TEAM_COUNT_BY_PROJECT_NAME,
    {
      variables: { projectName },
    },
  );
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { closedTeamCount } = data.getProjectInfo;
  const unit = '팀';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={closedTeamCount} unit={unit} />
    </DashboardContent>
  );
};
