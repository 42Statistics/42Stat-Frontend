import { useContext } from 'react';

import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';

import { GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME } from '@/Project/dashboard-contents-queries/GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME';
import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';

export const BasicInfo = () => {
  const projectName = useContext(ProjectNameContext);

  const title = '기본 정보';
  const { loading, error, data } = useQuery(
    GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME,
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

  const getPeopleRange = (from: number, to: number) => {
    if (from === to) {
      if (from === 1) {
        return '1인';
      }
      return `${from}인`;
    }
    return `${from}~${to}인`;
  };

  const { minUserCount, maxUserCount, estimateTime, difficulty } =
    data.getProjectInfo;

  let text = `${getPeopleRange(minUserCount, maxUserCount)}`;
  if (estimateTime != null) {
    text += ` · ${estimateTime}`;
  }
  if (difficulty != null) {
    text += ` · ${difficulty.toLocaleString()} XP`;
  }

  return (
    <DashboardContent title={title}>
      <TextDefault text={text} />
    </DashboardContent>
  );
};
