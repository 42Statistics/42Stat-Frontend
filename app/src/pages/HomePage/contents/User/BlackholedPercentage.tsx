import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { PieChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import { capitalize } from 'lodash-es';

const GET_BLACKHOLED_PERCENTAGE = gql(/* GraphQL */ `
  query GetBlackHoledPercentage {
    getHomeUser {
      blackholedRate {
        total
        fields {
          key
          value
        }
      }
    }
  }
`);

export const BlackholedPercentage = () => {
  const title = '블랙홀 유저 비율';
  const {
    loading,
    error,
    data: queryData,
  } = useQuery(GET_BLACKHOLED_PERCENTAGE);

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
  if (!queryData)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { total, fields } = queryData.getHomeUser.blackholedRate;
  const labels = fields.map((field) => capitalize(field.key));
  const series = fields.map((field) => field.value);

  return (
    <DashboardContent title={title}>
      <BlackholedPercentageChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type BlackholedPercentageChartProps = {
  labels: string[];
  series: number[];
};

const BlackholedPercentageChart = ({
  labels,
  series,
}: BlackholedPercentageChartProps) => {
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
