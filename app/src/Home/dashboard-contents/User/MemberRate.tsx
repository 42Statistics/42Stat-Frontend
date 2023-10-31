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

const GET_MEMBER_RATE = gql(/* GraphQL */ `
  query GetMemberRate {
    getHomeUser {
      memberRate {
        fields {
          key
          value
        }
      }
    }
  }
`);

export const MemberRate = () => {
  const title = '멤버 비율';
  const description = '블랙홀 유저 포함';

  const { loading, error, data } = useQuery(GET_MEMBER_RATE);

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound />;
  }

  const { fields } = data.getHomeUser.memberRate;
  const labels = fields.map((field) => capitalize(field.key));
  const series = fields.map((field) => field.value);

  return (
    <DashboardContent title={title} description={description} type="ApexCharts">
      <MemberRateChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type MemberRateChartProps = {
  labels: string[];
  series: number[];
};

const MemberRateChart = ({ labels, series }: MemberRateChartProps) => {
  const options: ApexCharts.ApexOptions = {
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
