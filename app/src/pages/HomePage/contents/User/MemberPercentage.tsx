import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { PieChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { numberWithUnitFormatter } from '@utils/formatters';
import { capitalize } from 'lodash-es';

const GET_MEMBER_PERCENTAGE = gql(/* GraphQL */ `
  query GetMemberPercentage {
    getHomeUser {
      memberRate {
        total
        fields {
          key
          value
        }
      }
    }
  }
`);
export const MemberPercentage = () => {
  const title = 'Member 비율';
  const description = '블랙홀 유저 포함';

  const { loading, error, data: queryData } = useQuery(GET_MEMBER_PERCENTAGE);

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
  if (!queryData)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { memberRate } = queryData.getHomeUser;
  const { total, fields } = memberRate;
  const labels = fields.map((field) => capitalize(field.key));
  const series = fields.map((field) => field.value);

  return (
    <DashboardContent title={title} description={description}>
      <MemberPercentageChart labels={labels} series={series} />
    </DashboardContent>
  );
};

type MemberPercentageChartProps = {
  labels: string[];
  series: number[];
};

const MemberPercentageChart = ({
  labels,
  series,
}: MemberPercentageChartProps) => {
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
