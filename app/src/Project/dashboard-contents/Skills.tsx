import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@shared/components/DashboardContentView/Error';
import { Label, VStack } from '@shared/ui-kit';
import { compareLength } from '@shared/utils/compareLength';
import { useContext } from 'react';
import { ProjectNameContext } from '../contexts/ProjectNameContext';
import { GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME } from '../dashboard-contents-queries/GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME';

export const Skills = () => {
  const theme = useTheme();
  const projectName = useContext(ProjectNameContext);

  const title = '스킬';
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

  const { skills } = data.getProjectInfo;

  const skillsCount = skills.length;
  if (skillsCount === 0) {
    return (
      <DashboardContent title={title}>
        <NoneDash />
      </DashboardContent>
    );
  }

  return (
    <DashboardContent title={title}>
      <VStack spacing="1rem">
        {[...skills].sort(compareLength).map((skill) => (
          <Label key={skill} fontWeight={theme.fonts.weight.medium}>
            {skill}
          </Label>
        ))}
      </VStack>
    </DashboardContent>
  );
};
