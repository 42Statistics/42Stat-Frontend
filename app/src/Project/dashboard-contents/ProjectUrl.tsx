import { useContext } from 'react';

import { useTheme } from '@emotion/react';
import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';

import { GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME } from '@/Project/dashboard-contents-queries/GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME';
import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';

export const ProjectUrl = () => {
  const theme = useTheme();
  const projectName = useContext(ProjectNameContext);
  const title = 'Intra 프로젝트 링크';

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

  const { url } = data.getProjectInfo;

  return (
    <DashboardContent title={title}>
      <CustomLink
        to={url}
        target="_blank"
        rel="noopener noreferrer"
        fontSize={theme.fonts.size.body1}
      >
        바로가기
      </CustomLink>
    </DashboardContent>
  );
};
