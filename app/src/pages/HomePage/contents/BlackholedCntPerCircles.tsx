import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { DonutChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

const GET_WHEN_GO_BLACKHOLE = gql(/* GraphQL */ `
  query getWhenGoBlackHole {
    getTotalPage {
      blackholedCountPerCircles {
        circle
        value
      }
    }
  }
`);

export const BlackholedCntPerCircles = () => {
  const title = '언제 블랙홀에 많이 빠질까?';
  const { loading, error, data } = useQuery(GET_WHEN_GO_BLACKHOLE);
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

  const { blackholedCountPerCircles } = data.getTotalPage;

  const labels = blackholedCountPerCircles.map(({ circle }) => `${circle}서클`);
  const series = blackholedCountPerCircles.map(({ value }) => value);

  return (
    <DashboardContent title={title}>
      <BlackholedCntPerCirclesChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type BlackholedCntPerCirclesChartProps = {
  labels: string[];
  series: number[];
};

const BlackholedCntPerCirclesChart = ({
  labels,
  series,
}: BlackholedCntPerCirclesChartProps) => {
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
