import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Center, H3Text, VStack } from '@components/common';
import { Label } from '@components/common/Label';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { isDefined } from '@utils/isDefined';
import { isShortString } from '@utils/isShortString';
import { useParams } from 'react-router-dom';

const GET_OBJECTIVES_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetObjectivesByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      objectives
    }
  }
`);

export const Objectives = () => {
  const theme = useTheme();
  const { projectName } = useParams() as { projectName: string };

  const title = '키워드';
  const { loading, error, data } = useQuery(GET_OBJECTIVES_BY_PROJECT_NAME, {
    variables: { projectName },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { objectives } = data.getProjectInfo;
  const objectivesCount = objectives.filter(isDefined).length;

  if (objectivesCount === 0) {
    return (
      <DashboardContent title={title}>
        <Center w="100%" h="100%">
          <H3Text>키워드가 없는 과제입니다 😐</H3Text>
        </Center>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent title={title}>
      <VStack h="100%" spacing="1rem">
        {objectives
          .filter(isDefined)
          .sort(isShortString)
          .map((objective) => (
            <Label
              key={objective}
              backgroundColor={theme.colors.accent.default}
              fontWeight={theme.fonts.weight.medium}
            >
              {objective}
            </Label>
          ))}
      </VStack>
    </DashboardContent>
  );
};
