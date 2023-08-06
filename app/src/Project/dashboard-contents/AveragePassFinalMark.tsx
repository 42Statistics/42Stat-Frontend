import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';
import { useContext } from 'react';
import { ProjectNameContext } from '../contexts/ProjectNameContext';

const GET_AVERAGE_PASS_FINAL_MARK_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetAveragePassFinalMarkByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      averagePassFinalMark
    }
  }
`);

export const AveragePassFinalMark = () => {
  const projectName = useContext(ProjectNameContext);

  const title = '통과 시 평균 점수';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_PASS_FINAL_MARK_BY_PROJECT_NAME,
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

  const { averagePassFinalMark } = data.getProjectInfo;
  const unit = '점';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averagePassFinalMark} unit={unit} />
    </DashboardContent>
  );
};
