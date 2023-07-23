import { useQuery } from '@apollo/client';
import { PieChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { gql } from '@shared/__generated__';
import { numberWithUnitFormatter } from '@shared/utils/formatters';
import { capitalize } from 'lodash-es';

const GET_BLACKHOLED_RATE = gql(/* GraphQL */ `
  query GetBlackholedRate {
    getHomeUser {
      blackholedRate {
        fields {
          key
          value
        }
      }
    }
  }
`);

export const BlackholedRate = () => {
  const title = '블랙홀 유저 비율';
  const { loading, error, data } = useQuery(GET_BLACKHOLED_RATE);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { fields } = data.getHomeUser.blackholedRate;
  const labels = fields.map((field) => capitalize(field.key));
  const series = fields.map((field) => field.value);

  return (
    <DashboardContent title={title} isApexChart>
      <BlackholedRateChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type BlackholedRateChartProps = {
  labels: string[];
  series: number[];
};

const BlackholedRateChart = ({ labels, series }: BlackholedRateChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.mono.black, theme.colors.primary.light],
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
      fillSeriesColor: false,
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
