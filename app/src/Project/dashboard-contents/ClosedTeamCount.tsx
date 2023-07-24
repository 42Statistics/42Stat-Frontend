import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/NumberDefault';
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

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { closedTeamCount } = data.getProjectInfo;
  const unit = '팀';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={closedTeamCount} unit={unit} />
    </DashboardContent>
  );
};
