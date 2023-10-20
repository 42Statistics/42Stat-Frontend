import { useQuery } from '@apollo/client';
import { useContext } from 'react';

import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';

const GET_CURR_REGISTERED_TEAM_COUNT_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetCurrRegisteredTeamCountByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      currRegisteredTeamCount
    }
  }
`);

export const CurrRegisteredTeamCount = () => {
  const projectName = useContext(ProjectNameContext);

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
