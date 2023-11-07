import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { capitalize } from 'lodash-es';

import { gql } from '@shared/__generated__';
import type { Pair } from '@shared/__generated__/graphql';
import { PieChart } from '@shared/components/Chart';
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
      memberRate {
        fields {
          key
          value
        }
      }
      blackholedRate {
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

  const { fields: memberRateFields } = data.getHomeUser.memberRate;
  const { fields: blackholedRateFields } = data.getHomeUser.blackholedRate;

  const BLACK_HOLED_INDEX = 0;
  const ALIVE_INDEX = 1;
  const MEMBER_INDEX = 0;

  const fields: Pair[] = [
    blackholedRateFields[BLACK_HOLED_INDEX],
    memberRateFields[MEMBER_INDEX],
    {
      key: 'learner',
      value:
        blackholedRateFields[ALIVE_INDEX].value -
        memberRateFields[MEMBER_INDEX].value,
    },
  ];

  const labels = fields.map((field) => capitalize(field.key));
  const series = fields.map((field) => field.value);

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
  const BLACKHOLE_COLOR = theme.colors.mono.absolute.black;

  const options: ApexCharts.ApexOptions = {
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
    colors: [
      BLACKHOLE_COLOR,
      theme.colors.chart.primary.default,
      theme.colors.chart.primary.light,
    ],
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
