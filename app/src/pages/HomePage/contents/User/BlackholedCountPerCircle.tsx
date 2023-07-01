import { useQuery } from '@apollo/client';
import { DonutChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { GET_HOME } from '@pages/HomePage/GET_HOME';
import { numberWithUnitFormatter } from '@utils/formatters';

export const BlackholedCountPerCircle = () => {
  const title = '언제 블랙홀에 많이 빠질까?';
  const { loading, error, data } = useQuery(GET_HOME);
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { blackholedCountPerCircle } = data.getHomeUser;

  const labels = blackholedCountPerCircle.map(({ circle }) => `${circle}서클`);
  const series = blackholedCountPerCircle.map(({ value }) => value);

  return (
    <DashboardContent title={title} isApexChart>
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
