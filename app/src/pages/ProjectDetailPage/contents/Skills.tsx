import { useQuery } from '@apollo/client';
import { VStack } from '@components/common';
import { Label } from '@components/common/Label';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { isDefined } from '@utils/isDefined';
import { isShortString } from '@utils/isShortString';
import { useParams } from 'react-router-dom';
import { GET_PROJECT_INFO_BY_PROJECT_NAME } from './queries/GET_PROJECT_INFO_BY_PROJECT_NAME';

export const Skills = () => {
  const theme = useTheme();
  const { projectName } = useParams() as { projectName: string };

  const title = '스킬';
  const { loading, error, data } = useQuery(GET_PROJECT_INFO_BY_PROJECT_NAME, {
    variables: { projectName },
  });

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
