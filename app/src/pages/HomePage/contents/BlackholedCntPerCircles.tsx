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
      blackholedCntPerCircles {
        circle
        value
      }
    }
  }
`);

export const BlackholedCntPerCircles = () => {
  const { loading, error, data } = useQuery(GET_WHEN_GO_BLACKHOLE);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { blackholedCntPerCircles } = data.getTotalPage;
  const title = '언제 블랙홀에 많이 빠질까?';

  const labels = blackholedCntPerCircles.map(({ circle }) => `${circle}서클`);
  const series = blackholedCntPerCircles.map(({ value }) => value);

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
