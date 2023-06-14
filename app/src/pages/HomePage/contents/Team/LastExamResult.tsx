import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { BarChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_LAST_EXAM_RESULT = gql(/* GraphQL */ `
  query GetLastExamResult {
    getHomeTeam {
      lastExamResult {
        data {
          rank
          passCount
          totalCount
        }
        start
        end
      }
    }
  }
`);

export const LastExamResult = () => {
  const title = '직전 회차 시험 Rank 별 통과율';
  const { loading, error, data } = useQuery(GET_LAST_EXAM_RESULT);
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
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { lastExamResult } = data.getHomeTeam;
  const { start, end } = lastExamResult;

  const description = `${dayjs(start).format('YYYY년 M월 D일 H시 m분')}`;

  const categories = lastExamResult.data.map(({ rank }) => rank);
  const seriesData = lastExamResult.data.map(
    ({ passCount, totalCount }) => passCount / totalCount,
  );
  const series: ApexAxisChartSeries = [
    {
      name: 'Exam 통과율',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} description={description}>
      <LastExamResultChart categories={categories} series={series} />
    </DashboardContent>
  );
};

type LastExamResultChartProps = {
  categories: number[];
  series: ApexAxisChartSeries;
};

const LastExamResultChart = ({
  categories,
  series,
}: LastExamResultChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories,
      labels: {
        formatter: (value) => `Rank ${String(value).padStart(2, '0')}`,
      },
    },
    yaxis: {
      max: 1,
      labels: {
        formatter: (value) => `${(value * 100).toFixed(0)}%`,
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `${(value * 100).toFixed(1)}%`,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  return <BarChart options={options} series={series} />;
};