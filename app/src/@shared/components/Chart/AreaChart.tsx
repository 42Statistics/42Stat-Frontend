import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import ReactApexChart from 'react-apexcharts';
import { useDefaultOptions } from './hooks/useDefaultOptions';

type AreaChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const AreaChart = ({
  series,
  options: additionalOptions,
}: AreaChartProps) => {
  const theme = useTheme();
  const { defaultOptions } = useDefaultOptions();

  const areaChartOptions: ApexCharts.ApexOptions = {
    colors: [theme.colors.chart.accent.default],
    stroke: {
      width: 1.5,
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

  const options = merge(
    {},
    defaultOptions,
    areaChartOptions,
    additionalOptions,
  );

  return (
    <ReactApexChart
      type="area"
      series={series}
      options={options}
      width="99%"
      height="100%"
    />
  );
};
