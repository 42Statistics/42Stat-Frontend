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

import { GET_PROJECT_INFO_BY_PROJECT_NAME } from '../GET_PROJECT_INFO_BY_PROJECT_NAME';

export const Difficulty = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '경험치';
  const { loading, error, data } = useQuery(GET_PROJECT_INFO_BY_PROJECT_NAME, {
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
