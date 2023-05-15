import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { BarChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';

const GET_LAST_EXAM_RESULT = gql(/* GraphQL */ `
  query GetLastExamResult {
    getHomePage {
      lastExamResult {
        data {
          rank
          passCnt
          totalCnt
        }
        from
        to
      }
    }
  }
`);

export const LastExamResult = () => {
  const { loading, error, data } = useQuery(GET_LAST_EXAM_RESULT);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { lastExamResult } = data.getHomePage;
  const { from, to } = lastExamResult;

  const title = '직전 회차 시험 Rank 별 통과율';
  const description = `${dayjs().format('M월 D일 H시 m분')}`;

  const categories = lastExamResult.data.map(({ rank }) => rank);
  const seriesData = lastExamResult.data.map(
    ({ passCnt, totalCnt }) => passCnt / totalCnt,
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
