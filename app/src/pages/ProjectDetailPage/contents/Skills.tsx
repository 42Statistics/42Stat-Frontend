import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader, VStack } from '@components/common';
import { Label } from '@components/common/Label';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { isDefined } from '@utils/isDefined';
import { isShortString } from '@utils/isShortString';
import { useParams } from 'react-router-dom';

const GET_SKILLS_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetSkillsByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      skills
    }
  }
`);

export const Skills = () => {
  const theme = useTheme();
  const { projectName } = useParams() as { projectName: string };

  const title = '스킬';
  const { loading, error, data } = useQuery(GET_SKILLS_BY_PROJECT_NAME, {
    variables: { projectName },
  });

  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { skills } = data.getProjectInfo;

  return (
    <DashboardContent title={title}>
      <VStack h="100%" spacing="1rem">
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
