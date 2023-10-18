import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import Chart from './Chart';

type AreaChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const AreaChart = ({
  series,
  options: additionalOptions,
}: AreaChartProps) => {
  const theme = useTheme();

  const areaChartOptions: ApexCharts.ApexOptions = {
    colors: [theme.colors.chart.accent.default],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [],
  };

  const options = merge({}, areaChartOptions, additionalOptions);

  return <Chart type="area" series={series} options={options} />;
};
