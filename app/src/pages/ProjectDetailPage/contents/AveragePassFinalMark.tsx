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

const GET_AVERAGE_PASS_FINAL_MARK_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetAveragePassFinalMarkByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      averagePassFinalMark
    }
  }
`);

export const AveragePassFinalMark = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '통과 시 평균 점수';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_PASS_FINAL_MARK_BY_PROJECT_NAME,
    {
      variables: { projectName },
    },
  );
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { averagePassFinalMark } = data.getProjectInfo;
  const unit = '점';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averagePassFinalMark} unit={unit} />
    </DashboardContent>
  );
};
