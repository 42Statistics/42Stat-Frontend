import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H3Text } from '@components/common';
import { PieChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import { useParams } from 'react-router-dom';

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
  const { projectName } = useParams() as { projectName: string };

  const title = '결과 분포';
  const { loading, error, data } = useQuery(
    GET_VALIDATED_RATE_BY_PROJECT_NAME,
    {
      variables: { projectName },
    },
  );
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { validatedRate } = data.getProjectInfo;
  const labels = validatedRate.fields.map(({ key }) => key);
  const series = validatedRate.fields.map(({ value }) => value);

  if (validatedRate.total === 0) {
    return (
      <DashboardContent title={title}>
        <H3Text>제출 기록이 없어요 😐</H3Text>
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
    colors: [theme.colors.semantic.pass, theme.colors.semantic.fail],
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '팀'),
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
