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

const GET_CURR_REGISTERED_TEAM_COUNT_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetCurrRegisteredTeamCountByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      currRegisteredTeamCount
    }
  }
`);

export const CurrRegisteredTeamCount = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '진행 중인 팀';
  const { loading, error, data } = useQuery(
    GET_CURR_REGISTERED_TEAM_COUNT_BY_PROJECT_NAME,
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

  const { currRegisteredTeamCount } = data.getProjectInfo;
  const unit = '팀';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={currRegisteredTeamCount} unit={unit} />
    </DashboardContent>
  );
};
