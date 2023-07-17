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

export const BasicInfo = () => {
  const { projectName } = useParams() as { projectName: string };

  const title = '기본 정보';
  const { loading, error, data } = useQuery(GET_PROJECT_INFO_BY_PROJECT_NAME, {
    variables: { projectName },
  });

  const getPeopleRange = (from: number, to: number) => {
    if (from === to) {
      if (from === 1) {
        return '1인';
      }
      return `${from}인`;
    }
    return `${from}~${to}인`;
  };
  if (loading) return <DashboardContentLoading title={title} />;
  if (error)
    return <DashboardContentBadRequest title={title} message={error.message} />;
  if (!data) return <DashboardContentNotFound title={title} />;

  const { minUserCount, maxUserCount, estimateTime, difficulty } =
    data.getProjectInfo;

  let text = `${getPeopleRange(minUserCount, maxUserCount)}`;
  if (estimateTime != null) {
    text += ` / ${estimateTime}`;
  }
  if (difficulty != null) {
    text += ` / ${difficulty.toLocaleString()} XP`;
  }

  return (
    <DashboardContent title={title}>
      <TextDefault text={text} />
    </DashboardContent>
  );
};
