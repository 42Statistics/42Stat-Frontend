import { gql } from '@/__generated__';
import { BarChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { useQuery } from '@apollo/client';

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

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { lastExamResult } = data.getHomePage;
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

  return <LastExamResultChart categories={categories} series={series} />;
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
