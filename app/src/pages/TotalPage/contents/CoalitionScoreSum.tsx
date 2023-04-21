import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { BarChart } from '@/components/elements/Chart';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

export const GET_COALITION_SCORE_RECORD = gql(/* GraphQL */ `
  query getCoalitionScoreRecord {
    getTotalPage {
      scoreRecords {
        coalition {
          id
          name
        }
        records {
          at
          value
        }
      }
    }
  }
`);

export const CoalitionScoreSum = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RECORD);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { scoreRecords } = data.getTotalPage;
  const categories = scoreRecords.map(({ coalition }) => coalition.name);
  const seriesData = scoreRecords.map(({ records }) =>
    records.reduce((result, { value }) => {
      result += value;
      return result;
    }, 0),
  );

  const series: ApexAxisChartSeries = [
    {
      name: 'Coalition 합산 점수',
      data: seriesData,
    },
  ];

  return <CoalitionScoreSumChart categories={categories} series={series} />;
};

type CoalitionScoreSumChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
};

const CoalitionScoreSumChart = ({
  categories,
  series,
}: CoalitionScoreSumChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    colors: [
      theme.colors.coalition.gun,
      theme.colors.coalition.gon,
      theme.colors.coalition.gam,
      theme.colors.coalition.lee,
    ],
    xaxis: {
      categories,
    },
    yaxis: {
      labels: {
        formatter: (value) => numberWithUnitFormatter(value, 'P'),
      },
    },
  };

  return <BarChart options={options} series={series} />;
};
