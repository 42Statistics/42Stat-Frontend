import { useTheme } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { capitalize } from 'lodash-es';

import { gql } from '@shared/__generated__';
import type { Pair } from '@shared/__generated__/graphql';
import { DonutChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_USER_RATE = gql(/* GraphQL */ `
  query GetUserRate {
    getHomeUser {
      userRate {
        fields {
          key
          value
        }
      }
    }
  }
`);

export const UserRate = () => {
  const title = '유저 비율';

  const { loading, error, data } = useQuery(GET_USER_RATE);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound />;
  }

  // 백엔드에서 순서 정해서 주던가 했어야 했다
  const fields = data.getHomeUser.userRate.fields;
  const blackholed = fields.find((field: Pair) => field.key === 'blackholed');
  const cadet = fields.find((field: Pair) => field.key === 'cadet');
  const member = fields.find((field: Pair) => field.key === 'transcender');
  const alumni = fields.find((field: Pair) => field.key === 'alumni');

  const orderedFields = [blackholed, cadet, member, alumni].filter(
    (field) => field !== undefined,
  );

  const labels = orderedFields.map((field) => capitalize(field.key));
  const series = orderedFields.map((field) => field.value);

  return (
    <DashboardContent title={title} type="ApexCharts">
      <UserRateChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type UserRateChartProps = {
  labels: string[];
  series: number[];
};

const UserRateChart = ({ labels, series }: UserRateChartProps) => {
  const theme = useTheme();
  const BLACKHOLE_COLOR = theme.colors.chart.blackhole;

  const options: ApexCharts.ApexOptions = {
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
    theme: {
      monochrome: {
        enabled: false,
      },
    },
    colors: [
      BLACKHOLE_COLOR,
      theme.colors.chart.primary.default,
      theme.colors.chart.primary.light,
    ],
  };

  return <DonutChart labels={labels} series={series} options={options} />;
};
