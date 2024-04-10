import { BarChart } from '@shared/components/Chart';
import { kiloFormatter } from '@shared/utils/formatters/kiloFormatter';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

type MonthlyCoalitionScoreChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
  colors: string[];
};

export const MonthlyCoalitionScoreChart = ({
  categories,
  series,
  colors,
}: MonthlyCoalitionScoreChartProps) => {
  const data = series[0].data as number[];
  const [min, max] = [Math.min(...data), Math.max(...data)];

  const options: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
      },
    },
    legend: {
      show: false,
    },
    colors: colors,
    xaxis: {
      categories,
    },
    yaxis: {
      min: Math.floor(min - (max * 1.2 - min)),
      max: Math.ceil(max * 1.2),
      tickAmount: 4,
      labels: {
        formatter: (value) => kiloFormatter(value, 2),
      },
    },
    dataLabels: {
      formatter: (value) => kiloFormatter(value as number, 2), // FIXME: Type Assertion
    },
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, 'P'),
      },
      marker: {
        show: false,
      },
    },
  };

  return <BarChart options={options} series={series} />;
};
