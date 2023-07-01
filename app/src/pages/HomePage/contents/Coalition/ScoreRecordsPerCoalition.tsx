import { useQuery } from '@apollo/client';
import { LineChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { GET_HOME } from '@pages/HomePage/GET_HOME';
import { numberWithUnitFormatter } from '@utils/formatters';
import { isDefined } from '@utils/isDefined';

export const ScoreRecordsPerCoalition = () => {
  const title = '역대 코알리숑 스코어 변동 추이';
  const { loading, error, data } = useQuery(GET_HOME);
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { scoreRecordsPerCoalition } = data.getHomeCoalition;

  const colors: string[] = [];
  const series = scoreRecordsPerCoalition.map(({ coalition, records }) => {
    const seriesData = records.filter(isDefined).map(({ at, value }) => ({
      x: at,
      y: value,
    }));
    colors.push(coalition.color ?? 'black');
    return {
      name: coalition.name,
      data: seriesData,
    };
  });

  return (
    <DashboardContent title={title} isApexChart>
      <ScoreRecordsPerCoalitionChart series={series} colors={colors} />
    </DashboardContent>
  );
};

type ScoreRecordsPerCoalitionChartProps = {
  series: ApexAxisChartSeries;
  colors: string[];
};

const ScoreRecordsPerCoalitionChart = ({
  series,
  colors,
}: ScoreRecordsPerCoalitionChartProps) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      width: '100%',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
        format: 'yy.MM.',
      },
    },
    colors: colors,
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
