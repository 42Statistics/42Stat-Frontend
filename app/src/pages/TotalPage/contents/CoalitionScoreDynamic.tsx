import { Spinner } from '@/components/common';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';
import { GET_COALITION_SCORE_RECORD } from './CoalitionScoreSum';
import { LineChart } from '@/components/elements/Chart';

export const CoalitionScoreDynamic = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RECORD);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { scoreRecords } = data.getTotalPage;
  const series = scoreRecords.map(({ coalition, records }) => {
    const seriesData = records.map(({ at, value }) => ({
      x: at,
      y: value,
    }));
    return {
      name: coalition.name,
      data: seriesData,
    };
  });

  return <CoalitionScoreDynamicChart series={series} />;
};

type CoalitionScoreDynamicChartProps = {
  series: ApexAxisChartSeries;
};

const CoalitionScoreDynamicChart = ({
  series,
}: CoalitionScoreDynamicChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'yy.MM.',
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => numberWithUnitFormatter(value, 'P'),
      },
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
    },
  };

  return <LineChart series={series} options={options} />;
};
