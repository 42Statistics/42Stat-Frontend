import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { DonutChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';

const GET_BLACKHOLED_COUNT_PER_CIRCLE = gql(/* GraphQL */ `
  query getBlackholedCountPerCircle {
    getHomeUser {
      blackholedCountPerCircle {
        circle
        value
      }
    }
  }
`);

export const BlackholedCountPerCircle = () => {
  const title = '언제 블랙홀에 많이 빠질까?';
  const { loading, error, data } = useQuery(GET_BLACKHOLED_COUNT_PER_CIRCLE);
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

  const { blackholedCountPerCircle } = data.getHomeUser;

  const labels = blackholedCountPerCircle.map(({ circle }) => `${circle}서클`);
  const series = blackholedCountPerCircle.map(({ value }) => value);

  return (
    <DashboardContent title={title}>
      <BlackholedCountPerCircleChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type BlackholedCountPerCircleChartProps = {
  labels: string[];
  series: number[];
};

const BlackholedCountPerCircleChart = ({
  labels,
  series,
}: BlackholedCountPerCircleChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    legend: {
      show: false,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: theme.colors.primary.default,
      },
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
            },
            value: {
              show: true,
              formatter: (value) =>
                numberWithUnitFormatter(parseInt(value), '명'),
            },
          },
        },
      },
    },
  };

  return <DonutChart labels={labels} series={series} options={options} />;
};