import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';

import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';
import { gql } from '@shared/__generated__';
import { PieChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H3Text } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_VALIDATED_RATE_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetValidatedRateByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      validatedRate {
        total
        fields {
          key
          value
        }
      }
    }
  }
`);

export const ValidatedRate = () => {
  const projectName = useContext(ProjectNameContext);

  const title = '결과 분포';
  const { loading, error, data } = useQuery(
    GET_VALIDATED_RATE_BY_PROJECT_NAME,
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

  const { validatedRate } = data.getProjectInfo;
  const labels = validatedRate.fields.map(({ key }) => key);
  const series = validatedRate.fields.map(({ value }) => value);

  if (validatedRate.total === 0) {
    return (
      <DashboardContent title={title}>
        <H3Text>제출 기록이 없어요</H3Text>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent title={title}>
      <ValidatedRateChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type ValidatedRateChartProps = {
  labels: string[];
  series: number[];
};

const ValidatedRateChart = ({ labels, series }: ValidatedRateChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.evaluation.pass, theme.colors.evaluation.fail],
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '팀'),
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
