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
  const memberPercentage = (fields[0].value / total) * 100;
  return (
    <DashboardContent title={title} description={description}>
      <MemberPercentageChart
        labels={['Member', 'Learner']}
        series={[memberPercentage, 100 - memberPercentage]}
      />
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
        formatter: (value) => `${value.toFixed(1)}%`,
      },
      fillSeriesColor: false,
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
