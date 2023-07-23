import { gql } from '@shared/__generated__';
import { useQuery } from '@apollo/client';
import { PieChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import { capitalize } from 'lodash-es';

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
  const title = 'Member 비율';
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
    <DashboardContent title={title} description={description} isApexChart>
      <MemberRateChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type MemberRateChartProps = {
  labels: string[];
  series: number[];
};

const MemberRateChart = ({ labels, series }: MemberRateChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.accent.default, theme.colors.primary.light],
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
      fillSeriesColor: false,
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
