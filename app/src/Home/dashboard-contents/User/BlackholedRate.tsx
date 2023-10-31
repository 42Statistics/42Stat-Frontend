import { useQuery } from '@apollo/client';
import { capitalize } from 'lodash-es';

import { gql } from '@shared/__generated__';
import { PieChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

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
    <DashboardContent title={title} type="ApexCharts">
      <BlackholedRateChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type BlackholedRateChartProps = {
  labels: string[];
  series: number[];
};

const BlackholedRateChart = ({ labels, series }: BlackholedRateChartProps) => {
  const options: ApexCharts.ApexOptions = {
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
