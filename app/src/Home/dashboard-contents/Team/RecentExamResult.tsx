import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { BarChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import dayjs from 'dayjs';

const GET_RECENT_EXAM_RESULT = gql(/* GraphQL */ `
  query GetRecentExamResult {
    getHomeTeam {
      recentExamResult {
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
          location
        }
      }
    }
  }
`);

export const RecentExamResult = () => {
  const title = '직전 회차 시험 통과율';
  const { loading, error, data } = useQuery(GET_RECENT_EXAM_RESULT);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

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
      name: '',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} description={description} type="ApexCharts">
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
    plotOptions: {
      bar: {
        borderRadius: 4,
      },
    },
    xaxis: {
      categories,
      labels: {
        formatter: (value) => value.toString().padStart(2, '0'), // value가 string 타입으로 추론되는데, toString()을 해주지 않으면 오류가 남. ApexCharts 문제인 듯.
      },
    },
    yaxis: {
      max: 1,
      labels: {
        formatter: (value) => `${(value * 100).toFixed(0)}%`,
      },
    },
    tooltip: {
      x: {
        formatter: (value) => `Exam Rank ${value.toString().padStart(2, '0')}`,
      },
      y: {
        formatter: (value, { dataPointIndex }) =>
          `${(value * 100).toFixed(1)}% (${
            seriesLabel[dataPointIndex].total
          }명 중 ${seriesLabel[dataPointIndex].pass}명)`,
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  return <BarChart options={options} series={series} />;
};
