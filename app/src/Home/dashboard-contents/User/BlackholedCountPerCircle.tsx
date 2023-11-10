import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

import { gql } from '@shared/__generated__';
import { DonutChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_BLACKHOLED_COUNT_PER_CIRCLE = gql(/* GraphQL */ `
  query GetBlackholedCountPerCircle {
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

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { blackholedCountPerCircle } = data.getHomeUser;

  const labels = blackholedCountPerCircle.map(({ circle }) => `${circle}서클`);
  const series = blackholedCountPerCircle.map(({ value }) => value);

  return (
    <DashboardContent title={title} type="ApexCharts">
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
              color: theme.colors.mono.black,
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
