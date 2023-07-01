import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/Text/TextDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';
import { GET_PROJECT_INFO_BY_PROJECT_NAME } from '../GET_PROJECT_INFO_BY_PROJECT_NAME';

export const UserCount = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '인원수';
  const { loading, error, data } = useQuery(GET_PROJECT_INFO_BY_PROJECT_NAME, {
    variables: { projectName },
  });

  const getPeopleRange = (from: number, to: number) => {
    if (from === to) {
      if (from === 1) {
        return 'Solo';
      }
      return `${from} Students`;
    }
    return `${from} ~ ${to} Students`;
  };
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { minUserCount, maxUserCount } = data.getProjectInfo;

  return (
    <DashboardContent title={title}>
      <TextDefault text={getPeopleRange(minUserCount, maxUserCount)} />
    </DashboardContent>
  );
};
