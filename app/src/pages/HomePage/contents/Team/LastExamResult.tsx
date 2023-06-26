import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { BarChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_RECENT_EXAM_RESULT = gql(/* GraphQL */ `
  query GetRecentExamResult($after: Int!) {
    getHomeTeam {
      recentExamResult(after: $after) {
        start
        end
        data {
          resultPerRank {
            rank
            rate {
              total
              fields {
                key
                value
              }
            }
          }
          beginAt
          endAt
          location
          maxPeople
          name
          nbrSubscribers
        }
      }
    }
  }
`);

export const LastExamResult = () => {
  const title = '직전 회차 시험 Rank 별 통과율';
  const { loading, error, data } = useQuery(GET_RECENT_EXAM_RESULT, {
    variables: {
      after: 1,
    },
  });
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

  const { recentExamResult } = data.getHomeTeam;
  const { beginAt, location, resultPerRank } = recentExamResult.data;

  const description = `${dayjs(beginAt).format(
    'YYYY년 M월 D일 H시 m분',
  )} / ${location}`;

  const categories = resultPerRank.map(({ rank }) => rank);
  const totalSeriesData = resultPerRank.map(({ rate: { total } }) => total);
  const passSeriesData = resultPerRank.map(({ rate: { fields } }) => {
    const pass = fields.find(({ key }) => key === 'pass');
    return pass ? pass.value : 0;
  });
  const seriesLabel = totalSeriesData.map((total, index) => {
    const pass = passSeriesData[index];
    return { pass, total };
  });
  const seriesData = totalSeriesData.map((total, index) => {
    const pass = passSeriesData[index];
    return total === 0 ? 0 : pass / total;
  });

  const series: ApexAxisChartSeries = [
    {
      name: '통과율',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} description={description}>
      <LastExamResultChart
        categories={categories}
        series={series}
        seriesLabel={seriesLabel}
      />
    </DashboardContent>
  );
};

type LastExamResultChartProps = {
  categories: number[];
  series: ApexAxisChartSeries;
  seriesLabel: { pass: number; total: number }[];
};

const LastExamResultChart = ({
  categories,
  series,
  seriesLabel,
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
        formatter: (value, { dataPointIndex }) =>
          `${(value * 100).toFixed(1)}% (${seriesLabel[dataPointIndex].pass}/${
            seriesLabel[dataPointIndex].total
          })`,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  return <BarChart options={options} series={series} />;
};
