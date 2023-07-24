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
import { useParams } from 'react-router-dom';
import { GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME } from '../dashboard-contents-queries/GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME';

export const Objectives = () => {
  const theme = useTheme();
  const { projectName } = useParams() as { projectName: string };

  const title = '키워드';
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

  const { objectives } = data.getProjectInfo;
  const objectivesCount = objectives.length;

  if (objectivesCount === 0) {
    return (
      <DashboardContent title={title}>
        <NoneDash />
      </DashboardContent>
    );
  }

  return (
    <DashboardContent title={title}>
      <VStack spacing="1rem">
        {[...objectives].sort(compareLength).map((objective) => (
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
