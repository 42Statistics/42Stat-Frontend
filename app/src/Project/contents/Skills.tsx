import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@components/elements/DashboardContentView/Error';
import { useTheme } from '@emotion/react';
import { DashboardContent } from '@shared/components/DashboardContent';
import { Label, VStack } from '@shared/ui-kit';
import { isDefined } from '@shared/utils/isDefined';
import { isShortString } from '@shared/utils/isShortString';
import { useParams } from 'react-router-dom';
import { GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME } from '../queries/GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME';

export const Skills = () => {
  const theme = useTheme();
  const { projectName } = useParams() as { projectName: string };

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

  const skillsCount = skills.filter(isDefined).length;
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
        {skills
          .filter(isDefined)
          .sort(isShortString)
          .map((skill) => (
            <Label key={skill} fontWeight={theme.fonts.weight.medium}>
              {skill}
            </Label>
          ))}
      </VStack>
    </DashboardContent>
  );
};
