import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_DIFFICULTY_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetDifficultyByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      difficulty
    }
  }
`);

export const Difficulty = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '경험치';
  const { loading, error, data } = useQuery(GET_DIFFICULTY_BY_PROJECT_NAME, {
    variables: { projectName },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { difficulty } = data.getProjectInfo;
  const unit = 'XP';

  return (
    <DashboardContent title={title}>
      {difficulty != null && difficulty > 0 ? (
        <NumberDefault number={difficulty} unit={unit} />
      ) : (
        <NoneDash />
      )}
    </DashboardContent>
  );
};
